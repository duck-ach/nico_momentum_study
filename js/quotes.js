const quotes = [
    {
        quote : "지금 가진 걱정거리는 전부 잊어버리세요. 심호흡하고 긍정적인 태도를 유지하세요. 그리고 명심하세요. 그리고 명심하세요. 상황은 나아질겁니다.",
        author : "Motivation"
    },
    {
        quote : "할 수 있어요. 하루씩 하면 됩니다. 당신은 회복력이 있고 용감하며 유능합니다. 자신을 자랑스럽게 생각하세요. 우울증과 불안을 견디는 것은 쉽지 않습니다.",
        author : "Motivation"
    },
    {
        quote : "삶이 고난을 줄 때는 왜 나에게 이런일이 가 아닌 덤벼 봐 라고 말하세요.",
        author : "Motivation"
    },
    {
        quote : "당신의 여정을 이해하지 못하는 사람도 있을 겁니다. 이해하지 못해도 됩니다. 그들을 위한 것이 아니니까요.",
        author : "파울로 코엘료"
    },
    {
        quote : "매일이 다시 시작할 기회입니다. 어제의 실패에 집착하지 말고 긍정적인 생각과 기대로 오늘을 시작하세요.",
        author : "캐서린 펄시퍼"
    },
    {
        quote : "얼마나 많은 실수를 하든, 얼마나 더디게 진행하든, 당신은 여전히 시도하지 않는 모든 사람보다 훨씬 앞서 있습니다.",
        author : "토니 로빈스"
    },
    {
        quote : "누구의 곁에 있을 때 에너지가 생기고 또 줄어드는지 잘 살펴보세요. 누구에게서 벗어나야 하는지, 누구의 곁에 있어야 하는지에 대해 우주가 힌트를 주는겁니다.",
        author : "Motivation"
    },
    {
        quote : "모든 것이 좋아지고 있습니다. 여기가 결말이 아닙니다.",
        author : "Motivation"
    },
    {   
        quote : "기억하세요, 당신은 자신이 생각하는대로 됩니다. 맥빠지는 생각을 하면 낙담할 일이 생길 거예요.",
        author : "조이스 마이어"
    },
    {
        quote : "감정을 치유하는 거라면 원하는 만큼 시간을 쓰세요. 극복은 하루아침에 되는 것이 아닙니다. 부서진 모습에서 자유로워지려면 아주 많은 작은 단계가 필요합니다.",
        author : "테레 아리고"
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;