import Header from '~/Layouts/components/Header';

const HeaderOnly = ({ children }) => {
    return (
        <>
            <div>
                <Header />
                <div className="container">
                    <div className="content">{children}</div>
                </div>
            </div>
        </>
    );
};

export default HeaderOnly;
