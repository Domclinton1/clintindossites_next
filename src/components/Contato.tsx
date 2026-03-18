import HeroForm from "./HeroForm";

export default function Contato() {
  return (
    <div className="flex flex-col items-center gap-[2rem] py-[2rem]">
      <div className="flex flex-col gap-[10px] text-center">
        <h2>Vamos tirar seu projeto do papel?</h2>
        <p>Preencha o formulário abaixo e receba um orçamento pelo Whatsapp</p>
      </div>

      <HeroForm />
    </div>
  );
}
