import classes from "./Layout.module.css";

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  const styleBg = {
    backgroundImage: urlBg ? `url(${urlBg})` : "none",
    backgroundColor: colorBg ?? "none",
  };
  return (
    <section className={classes.root} id={id} style={styleBg}>
      <div className={classes.wrapper}>
        <article>
          <div className={classes.title}>
            <h3>{title}</h3>
            <span className={classes.separator}></span>
          </div>
          <div className="desc full">
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
