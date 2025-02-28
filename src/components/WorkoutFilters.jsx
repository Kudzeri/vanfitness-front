const WorkoutFilters = ({ filters, handleFilterChange }) => {
    return (
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select name="type" className="p-2 bg-gray-800 text-white rounded" onChange={handleFilterChange} value={filters.type}>
          <option value="">All Types</option>
          <option value="cardio">Cardio</option>
          <option value="olympic_weightlifting">Olympic Weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
        </select>
  
        <select name="muscle" className="p-2 bg-gray-800 text-white rounded" onChange={handleFilterChange} value={filters.muscle}>
          <option value="">All Muscles</option>
          <option value="biceps">Biceps</option>
          <option value="chest">Chest</option>
          <option value="triceps">Triceps</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lower_back">Lower Back</option>
          <option value="middle_back">Middle Back</option>
          <option value="calves">Calves</option>
        </select>
  
        <select name="difficulty" className="p-2 bg-gray-800 text-white rounded" onChange={handleFilterChange} value={filters.difficulty}>
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>
    );
  };
  
  export default WorkoutFilters;
  