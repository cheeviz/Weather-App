import tw from 'tailwind-styled-components'

export const Container = tw.div`w-full h-screen flex items-center justify-center`
export const Box = tw.div`bg-[#7c31f5] p-5 rounded-2xl`

export const WeatherInfoContainer = tw.div`flex flex-col`
export const WeatherTitleBox = tw.div`flex flex-col items-center justify-center mt-5`
export const CidadeTitle = tw.h1`text-3xl font-bold`
export const DateNow = tw.p`text-xl`

export const WeatherClimate = tw.div`flex flex-col items-center justify-center mt-5 gap-5`
export const WeatherInfoBox = tw.div`flex flex-col items-center text-4xl drop-shadow-2xl`
export const Icon = tw.img`w-32`
export const Paragrafo = tw.p`font-bold`

export const WeatherInformation = tw.div`flex gap-5`
export const WeatherInformationBox = tw.div`flex flex-col items-center`
export const Span = tw.span`font-semibold text-base`