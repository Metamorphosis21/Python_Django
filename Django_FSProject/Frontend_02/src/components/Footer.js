import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link as MUILink, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled('footer')(({ theme }) => ({
    backgroundColor: 'transparent',
    color: 'orange',
    padding: theme.spacing(2, 0),
    borderTop: '2px solid orange',
    width: '100%',
    position: 'relative',
    bottom: 0,
    left: 0
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    maxWidth: '100% !important',
    width: '100%',
    margin: 0,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',
    textAlign: 'center'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    width: '100%'
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: 'orange',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline'
    },
    textAlign: 'center',
}));

const SocialIcon = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
        color: '#ff8c00'
    }
}));

export default function Footer() {
    return (
        <StyledFooter>
            <StyledContainer disableGutters>
                <StyledGridContainer container spacing={6}>
                    {/* Contact Information Section */}
                    <Grid item xs={12} sm={4}>
                        <StyledHeading variant="h4">Contact Us</StyledHeading>
                        <StyledTypography variant="body2" gutterBottom>
                            GrooveHub Technoz
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            123 Music Street, Melody Lane
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            Nashville, TN 37203
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            Email: contact@groovehub.com
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            Phone: (555) 123-4567
                        </StyledTypography>
                    </Grid>

                    {/* Services Section */}
                    <Grid item xs={12} sm={4}>
                        <StyledHeading variant="h4">Our Services</StyledHeading>
                        <StyledTypography variant="body2" gutterBottom>
                            <StyledLink to="/musicroom">
                                Music Rooms
                            </StyledLink>
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            <StyledLink to="/chatroom">
                                Chat Rooms
                            </StyledLink>
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            <StyledLink to="#">Live Streaming</StyledLink>
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            <StyledLink to="#">Private Sessions</StyledLink>
                        </StyledTypography>
                        <StyledTypography variant="body2" gutterBottom>
                            <StyledLink to="#">Premium Membership</StyledLink>
                        </StyledTypography>
                    </Grid>

                    {/* Social Media Section */}
                    <Grid item xs={12} sm={4}>
                        <StyledHeading variant="h4">Connect With Us</StyledHeading>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            justifyContent: 'center',  // Centers social icons
                            width: '100%'
                        }}>
                            <SocialIcon>
                                <FacebookIcon />
                            </SocialIcon>
                            <SocialIcon>
                                <TwitterIcon />
                            </SocialIcon>
                            <SocialIcon>
                                <InstagramIcon />
                            </SocialIcon>
                            <SocialIcon>
                                <LinkedInIcon />
                            </SocialIcon>
                        </Box>
                        <StyledTypography variant="body2" sx={{ marginTop: 2 }}>
                            Follow us on social media for updates and news!
                        </StyledTypography>
                    </Grid>
                </StyledGridContainer>

                {/* Copyright Section */}
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        marginTop: 4,
                        borderTop: '1px solid orange',
                        paddingTop: 2,
                        width: '100%'
                    }}
                >
                    © {new Date().getFullYear()} GrooveHub. All rights reserved.
                </Typography>
            </StyledContainer>
        </StyledFooter>
    );
}