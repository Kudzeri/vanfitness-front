const MotivationCard = ({title, description}) => {
  return (
          <div className="p-4 bg-gray-800 rounded-md text-center">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
  )
}

export default MotivationCard