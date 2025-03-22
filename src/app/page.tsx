import Image from 'next/image';


export default function ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
            <h1 className="text-4xl font-bold text-white mb-6 text-center shadow-lg">
                Спасибо, что выбрали нас! 🎉
            </h1>
            <p className="text-xl text-white text-center mb-4">
                Хочу сказать всем спасибо и удачи нам в проекте! 🚀<br />
                Это наш первый серьёзный проект — мне страшно тоже 😅,<br />
                но я очень сильно верю в вас! 💪✨
            </p>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 shadow-2xl rounded-xl overflow-hidden">
                <Image src="/team.webp" alt="Наша команда" width={500} height={300} />
            </div>
        </div>
    );
}