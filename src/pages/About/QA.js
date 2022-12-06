import React from "react";
import Question from "../../components/Question";

const QA = () => {
  return (
    <div className="grid md:grid-cols-2 auto-rows-max text-center md:text-left gap-4  py-8 px-4">
      <div>
        <span className="text-palette-yellow text-xl font-medium">
          SCHOOL TREP Q&A
        </span>
        <h2 className="text-palette-green font-bold text-3xl">
          Preguntas Frecuentes
        </h2>
        <p>
          A medida que su hijo ingresa a un nuevo año escolar, sabemos que
          probablemente tenga muchas preguntas. Queremos asegurarnos de que
          usted y su hijo se sientan como en casa con nosotros, por lo que hemos
          creado una lista de las preguntas más frecuentes sobre la compra de
          sus útiles escolares.
          <br />
          <br />
          Si la pregunta que está buscando no está en la lista, favor de
          enviarnos un correo y nos pondremos en contacto lo antes posible.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Question title="Soy una escuela.¿Cómo puedo trabajar con Schooltrep?">
          Uno de nuestros ejecutivos se pondrá en contacto contigo lo antes
          posible al enviar un correo a{" "}
          <a href="mailto:school@trep.com.mx" className="text-palette-green">
            school@trep.com.mx
          </a>
        </Question>
        <Question title="Tiempo de entraga estimado">
          Nuestro equipo se encarga de procesar todos los pedidos de Luneas a
          Viernes.
          <br />
          Una vez que el pedido se procesa, el paquete se mandará en la próxima
          fecha de envío.
          <br /> Nuestros pedidos son con entrega el día siguiente. Estarás
          recibiendo tu paquete el día Martes-Miércoles correspondiente a la
          fecha que generaste tu orden.
          <br />
          <span className="text-xs py-2 font-bold text-palette-blue">
            nota: si se genera el pedido el fin de semana el pedido se verá
            reflajado en el sistema el día Lunes.
          </span>{" "}
        </Question>
        <Question title="Me equivoqué en mi pedido.">
          Favor de enviarnos un correo a{" "}
          <a href="mailto:school@trep.com.mx">school@trep.com.mx</a>
          <br />
          <br />
          Es muy importante que nos compartan la siguiente información:
          <br /> Situación con la orden de compra y número de pedido.
        </Question>
        <Question title="¿Envían a toda la república?">
          Si, recibe tu pedido en cualquier punto de la República Mexicana.
        </Question>
        <Question title="¿Tienen pagos a Meses sin intereses?">
          Sí, para esta forma de pago, contamos con programas de pagos diferidos
          desde 3 hasta 18 meses sin intereses.
        </Question>
      </div>
    </div>
  );
};

export default QA;
