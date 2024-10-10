import React from "react";

interface ImagesCardProps {
  id: string;
  url: string;
  author: string;
  dimensions: string;
  onClick: () => void;
  onFavorite: () => void;
}

const ImagesCard: React.FC<ImagesCardProps> = ({ id, url, author, dimensions, onClick, onFavorite}) => {
  return(
    <div className="border rounded p-4">
      <img src="url" alt={`Imagem ${id}`}/>
    </div>
  );
}