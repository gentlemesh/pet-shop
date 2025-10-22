import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";

import ImgBgHero from '../../../assets/bg-hero.jpg';

export const HeroBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${ImgBgHero})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    marginLeft: `calc(-1 * ${theme.layout.paddingX})`,
    marginRight: `calc(-1 * ${theme.layout.paddingX})`,
    marginBottom: theme.layout.sectionPaddingBottom,
    padding: `80px ${theme.layout.paddingX} 210px ${theme.layout.paddingX}`,
}));

export const HeroHeading = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 700,
    lineHeight: '110%',
    fontSize: theme.typography.h1.fontSize,
    maxWidth: '400px',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.8rem',
        maxWidth: '600px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
        maxWidth: '800px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4.8rem',
        maxWidth: '1000px',
    },
}));