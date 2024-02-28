import { Link } from 'react-router-dom'

function LinkButton({ to, children }) {
    return <Link to={to} className="px-4 py-2 font-xl font-bold bg-sky-500 text-white rounded hover:bg-sky-600">{children}</Link>;
}

export default LinkButton;