interface FooterTextItemProps {
    text: string
}

function FooterTextItem({text}: FooterTextItemProps) {
  return <li className="mb-4">{text}</li>;
}

export default FooterTextItem;
