const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <div className="d-flex flex-column overflow-auto">{children}</div>
    </>
  );
};

export default Layout;
