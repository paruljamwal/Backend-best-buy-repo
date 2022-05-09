import {
  Box,
  Image,
  Text,
  Flex,
  GridItem,
  Grid,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
// import { IconButton } from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';
import { BsBag,BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen_1, onOpen_1, onClose_1 } = useDisclosure()
    const { isOpen2, onOpen2, onClose2 } = useDisclosure()
    const { isOpen3, onOpen3, onClose3 } = useDisclosure()
    const { isOpen4, onOpen4, onClose4 } = useDisclosure()
    const { isOpen5, onOpen5, onClose5 } = useDisclosure()
    const { isOpen6, onOpen6, onClose6 } = useDisclosure()
    const { isOpen7, onOpen7, onClose7 } = useDisclosure()
    const { isOpen8, onOpen8, onClose8 } = useDisclosure()
    const { isOpen9, onOpen9, onClose9 } = useDisclosure()
  const navigate=useNavigate()

  return (
    <Box w="100%" p={4} color="black" mt="20px" className="box">
      <Grid className="upper" templateColumns="repeat(5, 1fr)" gap={8}>
        <GridItem w="100%" h="10" />
        <GridItem w="100%" h="10" />
        <GridItem w="100%" h="10">
          <Link to="/">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGz2yn9GIURka522j8dWFdpOQsOkRUk0HA6w&usqp=CAU"
            alt="Dan Abramov"
         className="imagelife" />
          </Link>
        </GridItem>
        
        <GridItem w="100%" h="10"  />
        <GridItem w="100%" h="10" color="black">
          <Flex gap={8} align="right">
            <Flex align="center" gap={2} className="search">
              <FaSearch  fontSize="25px"/>
              <Text 
              fontSize="13px"
              lineHeight="20.8px"
              textAlign="start"
              letterSpacing="2.6px"
              >SEARCH</Text>
            </Flex>
            <Link to="/login"><BsPerson fontSize="25px" className="bs" /></Link>
            {/* <Link to="/cart/:id"><BsBag  fontSize="25px"  align="center" className="bsbag"/></Link> */}
            {/* <Link to="/cart">Search</Link> */}
          </Flex>
        </GridItem>
      </Grid>
      <Box w="100%" align="center" marginLeft="8%" >
      <Flex>
            <Menu isOpen={isOpen} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white"  }}
                aria-label="Courses"
                border="none"
                fontWeight="normal"
                fontSize="12px"
                lineHeight="15px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                display="inline-block"
            >
                Ethinic and Fusion wear
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} display="flex" gap="30px" align="center">
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S SHOES</h4>
                <MenuItem onClick={()=>{
                  navigate("/category")
                }}>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S DESIGNERS</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S SHOES</h4>
              <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S DESIGNERS</h4>
               <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
        </Menu>
        <Menu isOpen_1={isOpen_1} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                fontSize="12px"
                border="none"
                lineHeight="15px"
                textAlign="center"
                letterSpacing="2.6px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen_1}
                onMouseLeave={onClose_1}
            > Western wear
            </MenuButton>
            <MenuList onMouseEnter={onOpen_1} onMouseLeave={onClose_1} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S HANDBAGS</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Kurti's</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S DESIGNERS HANDBAGS</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S BAGS</h4>
              <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S ACCESSORIES</h4>
               <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
        </Menu>
        <Menu isOpen2={isOpen2} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                fontSize="12px"
                border="none"
                lineHeight="15px"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen2}
                onMouseLeave={onClose2}
            >
              Lingerie/Sleepwear
            </MenuButton>
            <MenuList onMouseEnter={onOpen2} onMouseLeave={onClose2} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S DESIGNERS</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S DESIGNERS</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S DESIGNERS</h4>
              <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">DESIGNERS</h4>
               <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
        </Menu>
        <Menu isOpen3={isOpen3} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                fontSize="12px"
                lineHeight="15px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                border="none"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen3}
                onMouseLeave={onClose3}
            >
               Top Brand
            </MenuButton>
            <MenuList onMouseEnter={onOpen3} onMouseLeave={onClose3} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S SHOES</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S DESIGNERS</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S SHOES</h4>
              <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S DESIGNERS</h4>
               <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
        </Menu>
        <Menu isOpen4={isOpen4} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                border="none"
                fontSize="12px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                lineHeight="15px"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen4}
                onMouseLeave={onClose4}
            >
                SportWear
            </MenuButton>
            <MenuList onMouseEnter={onOpen4} onMouseLeave={onClose4} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S SHOES</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S DESIGNERS</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S SHOES</h4>
              <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S DESIGNERS</h4>
               <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
        </Menu>
        <Menu isOpen5={isOpen5} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                fontSize="12px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                lineHeight="15px"
                border="none"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen5}
                onMouseLeave={onClose5}
            >
               PlusSize
            </MenuButton>
            <MenuList onMouseEnter={onOpen5} onMouseLeave={onClose5} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S SUNGLASSES</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S SUNGLASSES</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              
            </MenuList>
        </Menu>
        <Menu isOpen6={isOpen6} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                fontSize="12px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                border="none"
                lineHeight="15px"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen6}
                onMouseLeave={onClose6}
            >
               SizeStore
            </MenuButton>
            <MenuList onMouseEnter={onOpen6} onMouseLeave={onClose6} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S JEWELERY</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S WATCHES</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S JEWELERY</h4>
              <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
              <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S WATCHES</h4>
               <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
        </Menu>
        
        <Menu isOpen7={isOpen7} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                fontSize="12px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                border="none"
                lineHeight="15px"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen7}
                onMouseLeave={onClose7}
            >
               Beauty
            </MenuButton>
            <MenuList onMouseEnter={onOpen7} onMouseLeave={onClose7} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              
            </MenuList>
        </Menu>
        <Menu isOpen8={isOpen8} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "white"}}
                aria-label="Courses"
                fontSize="12px"
                lineHeight="15px"
                border="none"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                textAlign="center"
                letterSpacing="2.6px"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen8}
                onMouseLeave={onClose8}
            >
               BEAUTY
            </MenuButton>
            <MenuList onMouseEnter={onOpen8} onMouseLeave={onClose8} display="flex" gap="30px" align="center">
            <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">WOMEN'S  BEAUTY</h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4  fontSize="13px"
                lineHeight="20.8px"
                textAlign="center"
                letterSpacing="2.6px">MEN'S  BEAUTY</h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              
            </MenuList>
        </Menu>
        <Menu isOpen9={isOpen9} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={2}
                borderRadius={5}
                _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                fontSize="14px"
                padding="4px"
                margin="4px"
                cursor="pointer"
                marginLeft="5px"
                lineHeight="15px"
                border="none"
                textAlign="center"
                letterSpacing="2.6px"
                color="black"
                fontFamily="futura,sans-serif"
                onMouseEnter={onOpen9}
                onMouseLeave={onClose9}
            >
               Footwear/Bag
            </MenuButton>
            <MenuList 
            onMouseEnter={onOpen9}
             onMouseLeave={onClose9} 
             display="flex"
             fontFamily="futura,sans-serif"
             gap="30px" align="center">
                <div >
                  <h4>WOMEN'S</h4>
                  <MenuList>Accessories</MenuList>
                  <MenuList>Activewear</MenuList>
                  <MenuList>Coats & Jackets</MenuList>
                  <MenuList>Dresses</MenuList>
                  <MenuList>Handbags</MenuList>
                  <MenuList>Jeans & Denim</MenuList>
                  <MenuList>Jewelry</MenuList>
                  <MenuList>Lingerie & Hoisery</MenuList>
                  <MenuList>Pants & Leggings</MenuList>
                  <MenuList>Shoes</MenuList>
                  <MenuList>Sunglasses</MenuList>
                  <MenuList>Swimwear</MenuList>
                  <MenuList>Tops</MenuList>
                  <MenuList>Watches</MenuList>
                </div>
                <div>
                <h4>MEN'S</h4>
                <MenuList>Accessories</MenuList>
                <MenuList>Coats & Jackets</MenuList>
                <MenuList>Dress Shirts</MenuList>
                <MenuList>Pants</MenuList>
                <MenuList>Polo Shirts</MenuList>
                <MenuList>Shoes</MenuList>
                <MenuList>Sunglasses</MenuList>
                <MenuList>Suit &</MenuList>
                <MenuList>Sweaters</MenuList>
                <MenuList>T-Shirts</MenuList>
                <MenuList>Watches</MenuList>
                </div>
            </MenuList>
        </Menu>
        </Flex>
      </Box>
    </Box>
    
  );
};
