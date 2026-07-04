import { useEffect, useState } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

import compassSvg from '~/assets/404/compass.svg'
import routesSvg from '~/assets/404/routes.svg'

const customFountainOptions = {
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  background: {
    color: '#ffffff'
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: [
        '#81a1c1',
        '#88c0d0',
        '#bf616a',
        '#b48ead',
        '#a3be8c',
        '#ebcb8b'
      ]
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: {
        min: 0.2,
        max: 0.7
      }
    },
    size: {
      value: {
        min: 4,
        max: 10
      }
    },
    move: {
      enable: true,
      speed: {
        min: 8,
        max: 18
      },
      direction: 'top',
      random: true,
      outModes: {
        default: 'destroy'
      },
      gravity: {
        enable: true,
        acceleration: 15
      }
    }
  },
  emitters: {
    direction: 'top',
    rate: {
      quantity: 4,
      delay: 0.05
    },
    size: {
      width: 100,
      height: 0
    },
    position: {
      x: 50,
      y: 100
    }
  }
}

export default function NotFound() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={customFountainOptions}
        />
      )}

      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 3
        }}
      >
        <Stack
          direction={{
            xs: 'column',
            md: 'row'
          }}
          spacing={{
            xs: 4,
            md: 10
          }}
          alignItems="center"
        >
          {/* Left */}
          <Stack
            spacing={3}
            alignItems={{
              xs: 'center',
              md: 'flex-start'
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  color: '#2e3440',
                  fontSize: {
                    xs: '4rem',
                    md: '8rem'
                  }
                }}
              >
                404
              </Typography>

              <Box
                component="img"
                src={compassSvg}
                alt="Compass"
                sx={{
                  width: {
                    xs: 50,
                    md: 70
                  },
                  height: {
                    xs: 50,
                    md: 70
                  }
                }}
              />
            </Stack>

            <Typography
              sx={{
                fontSize: {
                  xs: '1rem',
                  md: '1.2rem'
                },
                color: '#4c566a',
                textAlign: {
                  xs: 'center',
                  md: 'left'
                }
              }}
            >
              The content you are looking for was not found
            </Typography>

            <Button
              variant="contained"
              href="/"
              sx={{
                bgcolor: '#88c0d0',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#6fb3c5'
                }
              }}
            >
              Return to Home
            </Button>
          </Stack>

          {/* Right */}
          <Box
            component="img"
            src={routesSvg}
            alt="Routes"
            sx={{
              width: {
                xs: 250,
                md: 400
              },
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Stack>
      </Box>
    </>
  )
}