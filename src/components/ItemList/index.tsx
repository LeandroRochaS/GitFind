import './style.css';

interface ItemListProps {
  title: string;
  description: string;
  darkMode: boolean;
}

export function ItemList({ title, description, darkMode }: ItemListProps) {
  return (
    <>
      <div className="itemList">
        <strong style={{ color: `${darkMode ? '#539BF5' : '#2d333b'}` }}>
          {title}
        </strong>
        <p style={{ color: `${darkMode ? '#999999' : '#2d333b'}` }}>
          {description}
        </p>
        <hr />
      </div>
    </>
  );
}
