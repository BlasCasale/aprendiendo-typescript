// array

const languages: (string | number)[] = []

languages.push('JavaScript')
languages.push(3)

const heroes: Hero[] = []

type CellValue = 'x' | 'o' | ''
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['o', 'x', 'o']
]

// tuplas

// type State = [string, (newName: string) => void]
// const [hero, setHero]: State = useState('Thor')+

type RGB = readonly [number, number, number] // se puede congelar asi con readonly
const white: RGB = [255, 255, 255]

// white.push(250) // esto pasa y rompe la tupla