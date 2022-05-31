<template>
  <section class="faq">
    <div class="container">
      <div class="faq-container">
        <div class="faq__item">
          <div class="faq__title">
            <h4>Quelles sont les modalités de livraison ?</h4>
          </div>
          <div class="faq__answer">
            <p>Voici tout ce qu'il faut savoir :</p>
            <ul>
              <li>Nous livrons uniquement en France métropolitaine</li>
              <li>La livraison s'effectue par Colissimo</li>
              <li>Le délai de livraison est de 5 jours ouvrés maximum</li>
              <li>
                La livraison est possible à votre domicile ou en
                point&nbsp;relais
              </li>
              <li>
                Le coût de livraison est déterminé en fonction du mode de
                livraison. Le montant sera affiché lors du paiement de la
                commande
              </li>
            </ul>
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__title">
            <h4>Quelles sont les modalités de retour ?</h4>
          </div>
          <div class="faq__answer">
            <p>
              - Vous disposez d'un délai de 14 jours à compter de la date de
              réception de votre colis pour retourner un article. Voici tout ce
              qu'il faut savoir :
            </p>
            <p>
              - Un module permettant de générer une étiquette prépayée Colissimo
              est disponible dans votre espace client dans la rubrique “Mes
              commandes”. Cependant les frais de retour sont à votre charge, ils
              seront déduits du montant remboursé une fois le produit
              réceptionné.
            </p>
            <p>
              - Nous ne faisons pas d'échange. Tout produit retourné est
              remboursé
            </p>
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__title">
            <h4>
              Que dois-je faire si je rencontre un problème qualité avec mon
              article ?
            </h4>
          </div>
          <div class="faq__answer">
            <p>
              Si vous constatez une non conformité, vous pouvez contacter le
              service clients&nbsp;<strong>Heimstone</strong><b>&nbsp;</b>à
              TheKooples - Second Love.Il vous demandera de transmettre :
            </p>
            <p>- Votre numéro de commande</p>
            <p>- Nom du produit, la couleur, la taille et l'EAN</p>
            <p>- Commentaire précisant le problème rencontré</p>
            <p>- Photos</p>
            <p>
              - Pensez à notifier qu’il s’agit d’un produit de l’offre Heimstone
              Timeless pour faciliter le traitement de votre demande
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.faq {
  padding: 5rem;
}
.faq__item {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}
.faq__title {
  cursor: pointer;
  background: var(--dark);
  color: var(--white);
  border: none;
  outline: none;
  text-align: left;
  transition: all 0.5s linear;
  padding: 0.4rem 0.8rem;
}
.faq__answer {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 0rem;
  border: 1px solid var(--dark);
  padding-bottom: 1rem;
}
.faq__answer.faq__open {
  opacity: 1;
  padding: 0.4rem 0.8rem;
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  .faq {
    padding: 2rem;
  }
}
</style>
<script>
export default {
  name: "FaqVue",
  mounted() {
    const faqs = document.querySelectorAll(".faq__item");

    const handleClickTab = (e) => {
      let currentFaq = e.currentTarget;
      let currentAnswer = currentFaq.querySelector(".faq__answer");
      currentAnswer.classList.toggle("faq__open");

      // Récupère la taille que prendrait l'élémént et l'applique en style inline
      currentAnswer.style.maxHeight
        ? (currentAnswer.style.maxHeight = null)
        : (currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px");
    };

    faqs.forEach((faq) => faq.addEventListener("click", handleClickTab));
  },
};
</script>
