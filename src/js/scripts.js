
const FormCnpj = document.getElementById('FormCnpj');
//TAGS P[SPAN]
const RAZAO_SOCIAL = document.querySelector("#RAZAO_SOCIAL");
const CNPJRESULT = document.querySelector("#CNPJ");
const STATUS = document.querySelector("#STATUS");
const CNAE_PRINCIPAL_DESCRICAO = document.querySelector("#CNAE_PRINCIPAL_DESCRICAO");
const CEP = document.querySelector("#CEP");
const DATA_ABERTURA = document.querySelector("#DATA_ABERTURA");
const DDD = document.querySelector("#DDD");
const TELEFONE = document.querySelector("#TELEFONE");
const EMAIL = document.querySelector("#EMAIL");
const LOGRADOURO = document.querySelector("#LOGRADOURO");
const BAIRRO = document.querySelector("#BAIRRO");
const MUNICIPIO = document.querySelector("#MUNICIPIO");
const UF = document.querySelector("#UF");
// Loader
const loader = document.querySelector("#loader");
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

if(FormCnpj){
 

  FormCnpj.addEventListener("submit", async (e) => {
   e.preventDefault();
   
   //VALIDATION CNPJ   
   const InpuT_CNPJ = document.getElementById("InputCnpj").value;
   if(InpuT_CNPJ == '')
   {
    document.getElementById("validate").innerText = '* Insira apenas os números sem os caracteres(ponto, barra e traço)';
    return false;
   }else{
    const CNPJ_validate = /^\d{14}$/.test(InpuT_CNPJ);
    if(CNPJ_validate == false)
    {
      document.getElementById("validate").innerText = '* Insira apenas os números sem os caracteres(ponto, barra e traço)';
      return false;
    }else{
      document.getElementById("validate").innerText = "";
    }

   };

   toggleLoader();
   
   //API
   const apispeedioURL = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${InpuT_CNPJ}`;
   const response = await fetch(apispeedioURL);
   let userData = await response.json();

   //INSERT INFO TAGS P[SPAN] + validation TERNARY VALIDATION
   RAZAO_SOCIAL.innerText             = userData['RAZAO SOCIAL']                    ? userData['RAZAO SOCIAL']             :'Indisponível no Momento'; 
   CNPJRESULT.innerText               = userData.CNPJ                               ? userData.CNPJ                        :'Indisponível no Momento'; 
   STATUS.innerText                   = userData.STATUS                             ? userData.STATUS                      :'Indisponível no Momento';
   CNAE_PRINCIPAL_DESCRICAO.innerText = userData['CNAE PRINCIPAL DESCRICAO']        ? userData['CNAE PRINCIPAL DESCRICAO'] :'Indisponível no Momento';
   CEP.innerText                      = userData.CEP                                ? userData.CEP                         :'Indisponível no Momento';
   DATA_ABERTURA.innerText            = userData['DATA ABERTURA']                   ? userData['DATA ABERTURA']            :'Indisponível no Momento';
   DDD.innerText                      = userData.DDD                                ? userData.DDD                         :'Indisponível no Momento';
   TELEFONE.innerText                 = userData.TELEFONE                           ? userData.TELEFONE                    :'Indisponível no Momento';
   EMAIL.innerText                    = userData.EMAIL                              ? userData.EMAIL                       :'Indisponível no Momento';
   LOGRADOURO.innerText               = userData.LOGRADOURO                         ? userData.LOGRADOURO                  :'Indisponível no Momento';
   BAIRRO.innerText                   = userData.BAIRRO                             ? userData.BAIRRO                      :'Indisponível no Momento';
   MUNICIPIO.innerText                = userData.MUNICIPIO                          ? userData.MUNICIPIO                   :'Indisponível no Momento';
   UF.innerText                       = userData.UF                                 ? userData.UF                          :'Indisponível no Momento';
  
  
  toggleLoader();

  var element = document.getElementById("container_info");
  element.classList.add("container_info_open");


  });
}