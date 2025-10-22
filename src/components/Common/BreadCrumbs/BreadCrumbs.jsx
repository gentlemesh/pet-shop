import { Link } from "react-router-dom";

import { BreadcrumbsBox, BreadcrumbBtn } from './BreadCrumbs.styled';

function BreadCrumbs({ breadCrumbs }) {
    return (
        <BreadcrumbsBox separator="" aria-label="breadcrumb">
            {breadCrumbs.map(({ path, name }, i) => (
                i !== breadCrumbs.length - 1
                    ? (
                        <Link to={path} style={{ textDecoration: 'none' }}>
                            <BreadcrumbBtn>{name}</BreadcrumbBtn>
                        </Link>
                    ) : <BreadcrumbBtn className="bc-current">{name}</BreadcrumbBtn>
            ))
            }
        </BreadcrumbsBox >
    );
}

export default BreadCrumbs;