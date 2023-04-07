import React, { useState } from 'react'
// import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { Typography } from '@material-ui/core'
import { FormControl } from '@mui/material'
import Button from '@mui/material/Button'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
// import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
// import Grid2 from '@mui/material/Unstable_Grid2'

export default function Nav(props) {
  const [rate, setRate] = useState('Any')
  const [dollarRate, setDollarRate] = useState('Any')
  const [distance, setDistance] = useState(100)
  const [meterType, setMeterType] = useState('Any')
  const [crime, setCrime] = useState(false)
  // const [navExpanded, setNavExpanded] = useState(false);

  const onDistanceChange = (event, distance) => {
    setDistance(distance)
    props.distance(distance)
  }

  const onRateChange = (rate) => {
    var dollars
    if (rate === 10) {
      dollars = 'Any'
      rate = 'Any'
    } else {
      dollars = '$' + rate + '.00'
    }

    setDollarRate(dollars)
    setRate(rate)
    props.rate(rate)
  }

  const onTypeChange = (e) => {
    setMeterType(e.target.value)
    props.type(e.target.value)
  }

  const onSearch = (e) => {
    props.search(e)
    // this.closeNav()
  }

  const handleChange = (crime) => {
    setCrime(crime)
  }

  const marks = [
    {
      value: 10,
      label: '10m',
    },
    {
      value: 200,
      label: '200m',
    },
  ]

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      // [theme.breakpoints.up('sm')]: {
      // 	width: '12ch',
      // 	'&:focus': {
      // 		width: '20ch',
      // 	},
      // },
    },
  }))

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ '.MuiPaper-root': { width: '405px', padding: '20px' } }}
      >
        <FormControl sx={{ padding: '5px' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="autocomplete"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              autoFocus={true}
              // style={boxStyle}
            />
          </Search>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Meter Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={meterType}
            label="Meter Type"
            onChange={onTypeChange}
          >
            <MenuItem value="Any">
              <em>Any</em>
            </MenuItem>
            <MenuItem value={'Single'}>Single</MenuItem>
            <MenuItem value={'Twin'}>Twin</MenuItem>
            <MenuItem value={'Motorbike'}>Motorbike</MenuItem>
            <MenuItem value={'Disability'}>Disability</MenuItem>
            <MenuItem value={'Pay Station'}>Pay Station</MenuItem>
            <MenuItem value={'Bay'}>Bay</MenuItem>
          </Select>
        </FormControl>

        <div>
          // TODO remove slider and use search within viewport
          <Typography id="input-slider" gutterBottom>
            Distance
          </Typography>
          <Slider
            onChange={onDistanceChange}
            defaultValue={100}
            min={10}
            max={200}
            step={5}
            marks={marks}
            aria-valuetext="meters"
            track={'normal'}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => {
              return `${value}m`
            }}
          />
        </div>
        {/* <div style={sliderStyle}>
              <label style={labelStyle}>
                Max Hourly Rate: {this.state.dollarRate}
              </label>
              <Slider
                onChange={this.onRateChange}
                defaultValue={10}
                min={1}
                max={10}
                step={1}
              />
            </div> */}
        <Button onClick={onSearch} variant="primary" type="submit">
          Search
        </Button>

        {/* <label style={labelStyle}>
            <span>Vehicle Theft Overlay</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.crime}
              onColor={"#007bff"}
            />
          </label> */}
      </Drawer>
    </div>
  )
}
