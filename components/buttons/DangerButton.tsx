export default function DangerButton({text, onClickFunction}: any) {
  return (
    <button type="button"
      onClick={onClickFunction}
      className="bg-red-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-red-600 transition duration-200 each-in-out">
      {text}
    </button>
  )
}