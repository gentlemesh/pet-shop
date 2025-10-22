import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { DividerStack, DividerLine, DividerButton } from './TitleDivider.styled';

function TitleDivider({ title, linkTo, btnTitle, ...attributes }) {
    return (
        <DividerStack {...attributes}>
            <Typography variant="h1">{title}</Typography>
            <DividerLine />
            <Link to={linkTo}>
                <DividerButton>{btnTitle}</DividerButton>
            </Link>
        </DividerStack>
    );
}

export default TitleDivider;