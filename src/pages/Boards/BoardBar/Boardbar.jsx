import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddtoDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Button from '@mui/material/Button'
import { capitalizeFirstLetter } from '~/utils/formatter'
const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      paddingX: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      // thanh scroll thẳng với list card
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>


        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label='Add to Google drive'
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterIcon />}
          label='Filters'
          clickable
        />
      </Box>

      <Box sx={{
        display: 'flex',
        alignItem: 'center',
        gap: 2
      }}>

        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={2}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='duycuong'>
            <Avatar alt="Remy Sharp"
              src='https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/434676690_442145844943398_3149193981518289588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHKukcsVT057eHbcLDUlPOr2U03pAnU7wzZTTekCdTvDHQS1T7vg1HxmvW6f3eCIUHiDiDFydDPK_w4jFZofQwq&_nc_ohc=0dmgsot7kSMQ7kNvwF7tFoJ&_nc_oc=AdkDZtNZoKRF-u5Aaq-6ZTe9aGPEFt1OOzLcqE_sfxoRM2yemdu-UB8pPZ6VJ2i2lw-cHrz1ecBYtlCcv-BDbt_w&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=zWaAilodGuBQ366DJFr3Og&oh=00_AfNuvVOU3pNPmBJG4886jwWMcAhabf6LP-ZD7iBbGBD9Rg&oe=684970F5'
            />
          </Tooltip>
          <Tooltip title='duycuong'>
            <Avatar alt="Remy Sharp"
              src='https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/434676690_442145844943398_3149193981518289588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHKukcsVT057eHbcLDUlPOr2U03pAnU7wzZTTekCdTvDHQS1T7vg1HxmvW6f3eCIUHiDiDFydDPK_w4jFZofQwq&_nc_ohc=0dmgsot7kSMQ7kNvwF7tFoJ&_nc_oc=AdkDZtNZoKRF-u5Aaq-6ZTe9aGPEFt1OOzLcqE_sfxoRM2yemdu-UB8pPZ6VJ2i2lw-cHrz1ecBYtlCcv-BDbt_w&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=zWaAilodGuBQ366DJFr3Og&oh=00_AfNuvVOU3pNPmBJG4886jwWMcAhabf6LP-ZD7iBbGBD9Rg&oe=684970F5'
            />
          </Tooltip>
          <Tooltip title='duycuong'>
            <Avatar alt="Remy Sharp"
              src='https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/434676690_442145844943398_3149193981518289588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHKukcsVT057eHbcLDUlPOr2U03pAnU7wzZTTekCdTvDHQS1T7vg1HxmvW6f3eCIUHiDiDFydDPK_w4jFZofQwq&_nc_ohc=0dmgsot7kSMQ7kNvwF7tFoJ&_nc_oc=AdkDZtNZoKRF-u5Aaq-6ZTe9aGPEFt1OOzLcqE_sfxoRM2yemdu-UB8pPZ6VJ2i2lw-cHrz1ecBYtlCcv-BDbt_w&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=zWaAilodGuBQ366DJFr3Og&oh=00_AfNuvVOU3pNPmBJG4886jwWMcAhabf6LP-ZD7iBbGBD9Rg&oe=684970F5'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar