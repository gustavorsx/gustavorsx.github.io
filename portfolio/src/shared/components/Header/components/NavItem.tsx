import { useNavigate } from "react-router-dom";

interface NavItemProps {
  link: string;
  name: string;
}

function NavItem({ link, name }: NavItemProps): JSX.Element {
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate(link);
  };
  return (
    <li className="inline mr-4 hover:underline hover:text-blue-800 text-2xl uppercase" onClick={onClickItem}>
      {name}
    </li>
  );
}

export default NavItem;
