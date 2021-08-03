
import { motion } from "framer-motion";
import { Line, Container, ButtonTavoli, Card,Scroll, FlexButton,A,Alert, Button,Hyperlink, Warinig, Ops, Text, Popup, Giorni, Mese, Orari, Flex, Descrizione, Back, Svg, Data, CardBig } from "./styled";
import { Link } from "react-router-dom";
import { useSala } from "../App";
import { useEffect, useState } from "react";


export default function Choose() {

  const { orario: [{ data, orario }, setMomento] } = useSala();

  const [pop, setPOP] = useState(true);

  const giorni = [
    { "giorno": "21", },
    { "giorno": "22", },
    { "giorno": "28", },
    { "giorno": "29", },
  ]

  const orari = [
    { "orario": "12:00", },
    { "orario": "18:30", },
    { "orario": "20:30", }
  ]

  const oraricena = [
    { "orario": "18:30", },
    { "orario": "20:30", }
  ]

  
  return (
    <Container>
      {pop ? <Popup>
        <Warinig>
          <Ops>Ops 😕</Ops>
        <Scroll>
          <h2>🦽</h2>
          <Text>
            Se hai esigenze particolari , difficoltà di deambulazione , necessità di accedere con carrozzine o sedie a 
            rotelle ti chiediamo di rivolgerti al nostro Info Line <Hyperlink href="tel:+393516482510"> 3516482510</Hyperlink> o scriverci su <Hyperlink href="mailto:info@prolococasteldelrio.it">info@prolococasteldelrio.it</Hyperlink> troveremo
            assieme la miglior soluzione .
          </Text>
            <h2>🐕‍🦺</h2> 
          <Text>
            L’accesso ai cani è consentito , ti chiediamo però se vieni accompagnato dal tuo amico a 4 zampe di contattarci al Info Line 
            <Hyperlink href="tel:+393516482510"> 3516482510</Hyperlink> per trovare assieme il posto migliore .
          </Text>
          <h2>🤧</h2>
          <Text>
            Per segnalare allergie o intolleranze alimentari non risolvibili con i Menù proposti rivolgiti al Info Line <Hyperlink href="tel:+393516482510"> 3516482510</Hyperlink> faremo 
            il massimo per trovare assieme una soluzione .
          </Text>
          </Scroll>
          <FlexButton>
            <Button onClick={() => setPOP(false)} color={"white"} bg={"#adaeff"} width={"50%"}>Ho<p>capito</p>
            </Button>
              <A href="tel:+393516482510"   > 
            <Button >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>disponibile dalle 20 alle 22</span>
            </Button>
              </A>
          </FlexButton>
        </Warinig>
      </Popup> : <></>}
      <Data>{data} {orario}</Data>
      <Link to="/">
        <Back>
          <Svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </Svg>
        </Back>
      </Link>
      <Descrizione vh="10vh" >Seleziona una data</Descrizione>
      <motion.div drag="x" dragConstraints={{ left: -740, right: 0 }}>
        <Line >
          {giorni.map((b) => (
            data === b.giorno + " Agosto") ? (
            <Card key={b.giorno} color={"#ffade3"} onClick={() => { setMomento({ orario, data: b.giorno + " Agosto" }) }}>
              <Giorni>{b.giorno}</Giorni>
              <Mese>AGOSTO</Mese>
            </Card>
          ) : (
            <Card key={b.giorno} color={"white"} onClick={() => { setMomento({ orario, data: b.giorno + " Agosto" }) }}>
              <Giorni>{b.giorno}</Giorni>
              <Mese>AGOSTO</Mese>
            </Card>
          )
          )}

        </Line>
      </motion.div>
      <Descrizione vh="45vh" >Seleziona un orario</Descrizione>
      <motion.div drag="x" dragConstraints={{ left: -450, right: 0 }}>
        <Line>
          {data === "21 Agosto" || data === "28 Agosto" ? (oraricena.map((c) => (
            orario === "alle " + c.orario) ? (
            <CardBig key={c.orario} color={"#adaeff"} onClick={() => { setMomento({ orario: "alle " + c.orario, data }) }}>
              <Flex>
                <Orari size={"110px"} padding={"10px"}>{c.orario.substr(0, 2)}</Orari>
                <Orari size={"30px"}>{c.orario.substr(2)}</Orari>
              </Flex>
              <Mese>AVVISO: La prenotazione non sarà piu valida con un ritardo di 30 minuti</Mese>
            </CardBig>
          ) : (
            <CardBig key={c.orario} color={"white"} onClick={() => { setMomento({ orario: "alle " + c.orario, data }) }}>
              <Flex>
                <Orari size={"110px"} padding={"10px"}>{c.orario.substr(0, 2)}</Orari>
                <Orari size={"30px"}>{c.orario.substr(2)}</Orari>
              </Flex>
              <Mese>AVVISO: La prenotazione non sarà piu valida con un ritardo di 30 minuti</Mese>
            </CardBig>
          ))
          ) : (
            orari.map((c) => (
              orario === "alle " + c.orario) ? (
              <Card key={c.orario} color={"#adaeff"} onClick={() => { setMomento({ orario: "alle " + c.orario, data }) }}>
                <Flex>
                  <Orari size={"110px"} padding={"10px"}>{c.orario.substr(0, 2)}</Orari>
                  <Orari size={"30px"}>{c.orario.substr(2)}</Orari>
                </Flex>
                <Mese>AVVISO: La prenotazione non sarà piu valida con un ritardo di 30 minuti</Mese>
              </Card>
            ) : (
              <Card key={c.orario} color={"white"} onClick={() => { setMomento({ orario: "alle " + c.orario, data }) }}>
                <Flex>
                  <Orari size={"110px"} padding={"10px"}>{c.orario.substr(0, 2)}</Orari>
                  <Orari size={"30px"}>{c.orario.substr(2)}</Orari>
                </Flex>
                <Mese>AVVISO: La prenotazione non sarà piu valida con un ritardo di 30 minuti</Mese>
              </Card>
            )
            ))}
        </Line>
      </motion.div>
      {data !== undefined && orario!== undefined ? <Link to="/choose">
        <ButtonTavoli>Seleziona i posti</ButtonTavoli>
      </Link>:<Alert>Seleziona data e ora </Alert>}
    </Container>
  );
}