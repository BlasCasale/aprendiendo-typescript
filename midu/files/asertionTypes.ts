import { API_URL } from "../utils/utils"

// asersion de tipos

const canvas = document.getElementById('canvas')

// null si no lo encuentra
// HTMLElement si lo encuentra => es un tipo general porque no sabe que elemento de HTML es => HTMLCanvasElement

// como sabe typeScript que realmente estas recuperando el elemento <canvas/>?

// es inferencia => TS se da cuenta que dentro del if
// ya solo el canvas va a poder ser un HTMLCanvasElement
if (canvas instanceof HTMLCanvasElement) {
    const ctx = (canvas as HTMLCanvasElement).getContext('2d')
}

export const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error('Request failed')
}

type ResponsePlaceholder = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const data = await response.json() as ResponsePlaceholder

console.log(data)