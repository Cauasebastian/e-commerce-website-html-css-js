const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Jordan",
        price: 219,
        desc: "Faça história no mundo da moda com o Tênis Nike Air Jordan. Inspirado na lenda do basquete Michael Jordan, este calçado combina estilo e desempenho de forma única. Com sua icônica silhueta e tecnologia de amortecimento Air, o Air Jordan oferece conforto excepcional e suporte durante todo o dia. Sua parte superior em couro premium e detalhes exclusivos refletem o legado de excelência da marca. Seja nas quadras ou nas ruas, este tênis é uma afirmação de estilo e paixão pelo esporte. Escolha o Air Jordan e escreva sua própria história.",
        colors: [
            {
                code: "white",
                img: "./img/jordan1.png",
            },
            {
                code: "red",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Force",
        price: 149,
        desc: "Eleve seu estilo com o lendário Tênis Nike Air Force. Combinando um design icônico com tecnologia de amortecimento Air, este calçado oferece conforto incomparável e estilo atemporal. Sua parte superior em couro proporciona durabilidade e um visual sofisticado, enquanto a sola robusta garante aderência e estabilidade em cada passo. Perfeito para um visual casual ou para adicionar um toque de estilo esportivo aos seus looks do dia a dia. Escolha o Air Force e faça uma declaração de moda onde quer que vá.",
        colors: [
            {
                code: "white",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        desc: " Introduza um toque de estilo vintage moderno com o Tênis Nike Blazer. Inspirado nos clássicos da quadra de basquete, este calçado apresenta um design atemporal que nunca sai de moda. Sua parte superior em couro premium e o icônico Swoosh da Nike conferem um visual elegante e sofisticado. Além disso, a sola de borracha proporciona durabilidade e tração em todas as superfícies. Perfeito para quem busca um visual urbano e autêntico, o Nike Blazer é a escolha ideal para elevar seu estilo em qualquer ocasião. Escolha a tradição com um toque de modernidade - escolha o Blazer.",
        colors: [
            {
                code: "white",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Court Vision",
        price: 129,
        desc: "Domine as quadras com o Tênis Nike Court Vision. Projetado para oferecer desempenho excepcional e estilo clássico, este calçado é uma escolha ideal para os amantes do basquete. Sua parte superior em couro sintético proporciona durabilidade e suporte durante todo o jogo, enquanto a entressola acolchoada oferece amortecimento responsivo a cada passo. O design inspirado no basquete, com o icônico Swoosh da Nike, garante um visual autêntico dentro e fora da quadra. Seja para jogar ou apenas para exibir seu amor pelo esporte, o Court Vision é a escolha perfeita para os verdadeiros aficionados pelo basquete. Entre em quadra com confiança - escolha o Court Vision",
        colors: [
            {
                code: "white",
                img: "./img/court1.png",
            },
            {
                code: "black",
                img: "./img/court2.png",
            },
        ],
    },
    {
        id: 5,
        title: "FLight Legacy",
        price: 399,
        desc: "Desperte seu espírito de voar com o Tênis Nike Flight Legacy. Inspirado na herança de inovação da Nike no basquete, este calçado combina estilo arrojado e desempenho excepcional. Sua parte superior em couro sintético proporciona durabilidade e suporte, enquanto a entressola acolchoada oferece amortecimento responsivo a cada passo. O design elegante e moderno, com detalhes de marca distintivos, torna este tênis uma escolha perfeita para quem busca um visual de destaque nas quadras e nas ruas. Seja no jogo ou na vida cotidiana, eleve seu estilo com o Flight Legacy e faça uma declaração de ousadia e confiança. Escolha voar alto - escolha o Flight Legacy.",
        colors: [
            {
                code: "white",
                img: "./img/flight1.png",
            },
            {
                code: "black",
                img: "./img/flight2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductDesc.textContent = choosenProduct.desc;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
const checkoutButton = document.querySelector(".payButton");

checkoutButton.addEventListener("click", () => {
    payment.style.display = "none";
    // Limpar os campos de entrada
    document.querySelectorAll('.payInput').forEach(input => {
        input.value = '';
    });
});