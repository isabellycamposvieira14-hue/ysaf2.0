import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Nao autorizado" }, { status: 401 });
    }

    // Update profile with phone if provided
    if (phone) {
      await supabase
        .from("profiles")
        .update({ phone, updated_at: new Date().toISOString() })
        .eq("id", user.id);
    }

    // Send notification email via Supabase Edge Function or log it
    // For now, we store the notification in a simple way
    console.log(
      `[YSAF Dominus IA] Novo cadastro:\nNome: ${fullName}\nEmail: ${email}\nTelefone: ${phone || "Nao informado"}\nNotificar: ysafmidia@gmail.com`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao processar notificacao:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
