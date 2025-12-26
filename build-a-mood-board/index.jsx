export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img 
        className="mood-board-image" 
        src={image} 
        alt={description} 
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem 
          color="#ADD8E6" 
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" 
          description="A relaxing day at the shore" 
        />
        <MoodBoardItem 
          color="#90EE90" 
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" 
          description="Lush green fields" 
        />
        <MoodBoardItem 
          color="#FFD700" 
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" 
          description="The beautiful sights of Santorini" 
        />
      </div>
    </div>
  );
};

