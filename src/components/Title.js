import "./title.css";

const Title = (props) => {
    const { title, children } = props;

    return  <h1 className="title">{title}</h1>;
};

export default Title;