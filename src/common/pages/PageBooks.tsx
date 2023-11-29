import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PageBooks = () => {
	const { books } = useSelector((state: RootState) => state.cart);
	return (
		<>
			<p className="mb-4">
				This is the books page, there are {books.length} books.
			</p>
			{books.map((book) => {
				return (
					<div>
						<p>{book.title}</p>;
						<img
							src={`https://edwardtanguay.vercel.app/share/images/books/${book.idcode}.png`}
						/>
					</div>
				);
			})}
		</>
	);
};
