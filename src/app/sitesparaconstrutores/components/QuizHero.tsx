"use client";
import { useState } from "react";
type Respostas = {
  servico?: string;
  clientes?: string;
  site?: string;
  investimento?: string;
  valorInvestimento?: string;
  nome?: string;
  whatsapp?: string;
  endereco?: string;
  empreendimento?: string;
};

export default function QuizHero() {
  const [step, setStep] = useState(1);
  const [respostas, setRespostas] = useState<Respostas>({});
  function responder(campo: string, valor: string) {
    const novasRespostas = { ...respostas, [campo]: valor };
    setRespostas(novasRespostas);

    // lógica especial para investimento
    if (campo === "investimento" && valor === "Não") {
      setStep(5); // vai para step de valores alternativos
      return;
    }

    if (campo === "investimento" && valor === "Sim") {
      setStep(6); // vai direto para dados
      return;
    }

    setStep(step + 1);
  }

  function finalizar() {
    const mensagem = `Olá, me chamo ${respostas.nome}.
Sou do ramo: ${respostas.servico}.
Recebo clientes: ${respostas.clientes}.
Tenho site: ${respostas.site}.
Investimento disponível: ${respostas.valorInvestimento}.

Endereço: ${respostas.endereco}.
Quero adquirir meu site para constutores.`;

    window.location.href =
      "https://wa.me/5538991369873?text=" + encodeURIComponent(mensagem);
  }

  return (
    <div className="quiz-hero">
      <div className="w-full bg-gray-200 h-2 rounded mb-6">
        <div
          className="bg-black h-2 rounded"
          style={{ width: `${step * 16}%` }}
        ></div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">
            Qual ramo da construção civil você trabalha?
          </h2>

          <button
            onClick={() => responder("servico", "Construção civil")}
            className="quiz-btn"
          >
            Construção civil
          </button>
          <button
            onClick={() => responder("servico", "Serralheria")}
            className="quiz-btn"
          >
            Serralheria
          </button>
          <button
            onClick={() => responder("servico", "Vidraçaria")}
            className="quiz-btn"
          >
            Vidraçaria
          </button>
          <button
            onClick={() => responder("servico", "Pintura")}
            className="quiz-btn"
          >
            Pintura
          </button>
          <button
            onClick={() => responder("servico", "Gesseiro")}
            className="quiz-btn"
          >
            Gesseiro
          </button>
          <button
            onClick={() => responder("servico", "Eletricista")}
            className="quiz-btn"
          >
            Eletricista
          </button>
          <button
            onClick={() => responder("servico", "Marcenaria")}
            className="quiz-btn"
          >
            Marcenaria
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">
            Gostaria de receber orçamentos toda semana?
          </h2>

          <button
            onClick={() => responder("clientes", "Sim")}
            className="quiz-btn"
          >
            Sim
          </button>
          <button
            onClick={() => responder("clientes", "Não")}
            className="quiz-btn"
          >
            Não
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Você já possui website?</h2>

          <button onClick={() => responder("site", "Sim")} className="quiz-btn">
            Sim
          </button>
          <button onClick={() => responder("site", "Não")} className="quiz-btn">
            Não
          </button>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">
            Tem disponibilidade de investimento de R$2.197?
          </h2>

          <button
            onClick={() => responder("investimento", "Sim")}
            className="quiz-btn"
          >
            Sim
          </button>
          <button
            onClick={() => responder("investimento", "Não")}
            className="quiz-btn"
          >
            Não
          </button>
        </div>
      )}

      {/* STEP 5 - valores alternativos */}
      {step === 5 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">
            Qual investimento você consegue fazer para adquirir sua estrutura?
          </h2>

          <button
            onClick={() => responder("valorInvestimento", "1997")}
            className="quiz-btn"
          >
            Consigo pagar R$ 1.997 na estrutura
          </button>
          <button
            onClick={() => responder("valorInvestimento", "1747")}
            className="quiz-btn"
          >
            Consigo pagar R$ 1.747 na estrutura
          </button>
          <button
            onClick={() => responder("valorInvestimento", "1497")}
            className="quiz-btn"
          >
            Consigo pagar R$ 1.497 na estrutura
          </button>
          <button
            onClick={() => responder("valorInvestimento", "1497")}
            className="quiz-btn"
          >
            Só Consigo pagar R$ 987 na estrutura
          </button>
        </div>
      )}

      {/* STEP 6 */}
      {step === 6 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Quase pronto...</h2>

          <input
            className="border p-3 rounded-lg"
            placeholder="Seu nome"
            onChange={e => setRespostas({ ...respostas, nome: e.target.value })}
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Seu WhatsApp"
            onChange={e =>
              setRespostas({ ...respostas, whatsapp: e.target.value })
            }
          />
          <input
            className="border p-3 rounded-lg"
            placeholder="Nome do seu empreendimento"
            onChange={e =>
              setRespostas({ ...respostas, empreendimento: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Seu endereço"
            onChange={e =>
              setRespostas({ ...respostas, endereco: e.target.value })
            }
          />

          <button onClick={finalizar} className="quizcta cta-button">
            Receber análise pelo WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
