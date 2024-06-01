

const SectionTitle = ({ heading }) => {
    return (
        <div className="flex my-14">
            <div className="w-10 h-10 bg-green-600 mr-4 rounded-sm"></div>
            <h2 className="text-4xl font-bold text-green-600">{heading}</h2>
        </div>
    );
};

export default SectionTitle;