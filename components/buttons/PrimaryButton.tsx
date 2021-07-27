export default function PrimaryButton({text, onClickFunction}: any) {
  return (
    <button type="button"
      onClick={onClickFunction}
      className="bg-blue-500 text-white px-3 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out">
      {text}
    </button>
  )
}