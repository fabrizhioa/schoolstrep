import React, { useState } from "react";
import Input from "../components/Forms/Input";
import { cartElement, Articulos } from "../fakedata";
import { IoMdTrash } from "react-icons/io";
import Counter from "../components/Counter";

const CheckOut = () => {
  const [method, setMethod] = useState("standard");
  const [viewBilling, setviewBilling] = useState(false);

  function handleViewBilling() {
    setviewBilling(!viewBilling);
  }
  let total = 0;
  return (
    <div className="min-h-screen w-full flex flex-col antialiased overflow-hidden bg-white relative snap-y snap-proximity">
      <form className="pt-24 px-4 pb-4 grid md:grid-cols-2 max-w-screen-xl mx-auto w-full">
        <div className="lg:p-4">
          <div className="p-2 pb-6 border-b-2 ">
            <h2 className="col-span-full text-palette-primary text-xl font-bold">
              Información de contacto
            </h2>
            <Input
              title="Dirección de correo:"
              name="email"
              placeholder={"joe@doe.com"}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 p-2 pb-6 border-b-2 ">
            <h2 className="col-span-full text-palette-primary text-xl font-bold">
              Información de envío
            </h2>
            <Input title="Nombre:" name="shipname" placeholder="Joe" />

            <Input title="Apellido:" name="shiplastname" placeholder="Joe" />
            <Input
              title="Compañia"
              name={"shipcompany"}
              placeholder="Joe Co."
              cnd="col-span-full"
            />

            <Input
              title="Dirección:"
              placeholder="calle alta, CDMx"
              name="shipaddress"
              cnd="col-span-full"
            />

            <Input
              title={"Apartamento, Suite, Etc:"}
              placeholder="Apt 32, Cabo Leon"
              name="shipapt"
            />
            <Input
              title="Teléfono:"
              placeholder="+57 512512512"
              name="shipphone"
              type="tel"
            />

            <Input title="Ciudad:" placeholder="CDMx" name="shipcity" />
            <Input title="País:" placeholder="Mexico" name="shipcountry" />
            <Input
              title="Estado/Provincia:"
              placeholder="Distrito Federal"
              name="shipstate"
            />

            <Input title="Codigo Postal:" name="shipzip" />
          </div>
          <div className="p-2 pb-6 border-b-2 grid grid-cols-2 gap-4">
            <input type="hidden" name="shipmethod" value={method} />
            <h2 className="col-span-full text-palette-primary text-xl font-bold">
              Metodo de Entrega
            </h2>
            <div
              onClick={() => setMethod("standard")}
              className={
                "bg-slate-50 border-4 p-2 rounded-md cursor-pointer " +
                (method === "standard" && "border-palette-primary border-4")
              }
            >
              <h3 className="font-bold text-palette-second">Standard</h3>
              <p>4 - 10 Dias laborales</p>
              <p className="font-bold text-lg text-palette-second mt-4">
                $5.00
              </p>
            </div>
            <div
              onClick={() => setMethod("express")}
              className={
                "bg-slate-50 border-4 p-2 rounded-md cursor-pointer " +
                (method === "express" && "border-palette-primary border-4")
              }
            >
              <h3 className="font-bold text-palette-second">Express</h3>
              <p>2 - 5 Dias laborales</p>
              <p className="font-bold text-lg text-palette-second mt-4">
                $16.00
              </p>
            </div>
          </div>

          {/* Facturacion */}
          <div className="p-2 pb-6 grid auto-rows-max gap-4">
            <div className="flex items-center gap-1">
              <h2 className="col-span-full text-palette-primary text-xl font-bold">
                Facturación
              </h2>
              <input
                type="checkbox"
                value={viewBilling}
                onChange={handleViewBilling}
                className="accent-palette-ext cursor-pointer"
              />
            </div>
            {viewBilling && (
              <div className="grid grid-cols-2 gap-4 ">
                <Input
                  title="Nombre:"
                  name="billingFullname"
                  placeholder="Joe Doe"
                  cnd="col-span-full"
                />

                <Input
                  title="RFC:"
                  name={"billingRFC"}
                  placeholder=""
                  cnd="col-span-full"
                />

                <Input
                  title="Calle:"
                  placeholder="calle alta"
                  name="billingStreet"
                  cnd="col-span-full"
                />

                <Input
                  title={"Numero:"}
                  placeholder="Apt 32"
                  name="billingNumber"
                />
                <Input
                  title="Colonia:"
                  placeholder=""
                  name="billingColony"
                  type="tel"
                />

                <Input title="Ciudad:" placeholder="CDMx" name="billingCity" />
                <Input
                  title="País:"
                  placeholder="Mexico"
                  name="billingCountry"
                />
                <Input
                  title="Estado/Provincia:"
                  placeholder="Distrito Federal"
                  name="billingState"
                />

                <Input title="Codigo Postal:" name="billingZIP" />
                <div className={"flex flex-col w-full col-span-full"}>
                  <span className={" w-max text-sm font-bold text-palette-ext"}>
                    Uso de CFDI
                  </span>

                  <select
                    name="billingCFDI"
                    className="p-2 outline-none border-2 rounded-md bg-slate-50 text-gray-400 hover:text-gray-700 focus:text-gray-700 cursor-pointer active:border-palette-primary"
                  >
                    <option value="G01">Adquisición de mercancías.</option>
                    <option value="G02">
                      Devoluciones, descuentos o bonificaciones.
                    </option>
                    <option value="G03">Gastos en general.</option>
                    <option value="I01">Construcciones.</option>
                    <option value="I02">
                      Mobiliario y equipo de oficina por inversiones.
                    </option>
                    <option value="I03">Equipo de transporte.</option>
                    <option value="I04">Equipo de cómputo y accesorios.</option>
                    <option value="I05">
                      Dados, troqueles, moldes, matrices y herramental.
                    </option>
                    <option value="I06">Comunicaciones telefónicas.</option>
                    <option value="I07">Comunicaciones satelitales.</option>
                    <option value="I08">Otra maquinaria y equipo.</option>
                    <option value="D01">
                      Honorarios médicos, dentales y gastos hospitalarios.
                    </option>
                    <option value="D02">
                      Gastos médicos por incapacidad o discapacidad.
                    </option>
                    <option value="D03">Gastos funerales.</option>
                    <option value="D04">Donativos.</option>
                    <option value="D05">
                      Intereses reales efectivamente pagados por créditos
                      hipotecarios (casa habitación).
                    </option>
                    <option value="D06">
                      Aportaciones voluntarias al SAR.{" "}
                    </option>
                    <option value="D07">
                      Primas por seguros de gastos médicos.
                    </option>
                    <option value="D08">
                      Gastos de transportación escolar obligatoria.
                    </option>
                    <option value="D09">
                      Depósitos en cuentas para el ahorro, primas que tengan
                      como base planes de pensiones.
                    </option>
                    <option value="D10">
                      Pagos por servicios educativos (colegiaturas).
                    </option>
                    <option value="P01">Por definir.</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-slate-50 p-2 lg:p-6 rounded-md h-max">
          <div>
            <h2 className="col-span-full text-palette-primary text-xl font-bold">
              Resumen del pedido
            </h2>
          </div>

          <div className="flex flex-col gap-2 pb-4 border-b-2">
            {cartElement.map((element) => {
              const el = Articulos.find(
                (articulo) => articulo.id === element.itemId
              );

              total += Number(el.precio);

              return (
                <div
                  key={el.id}
                  className="border-b-2  grid grid-cols-[30%_70%]  items-center w-full bg-white rounded-md p-1 gap-2"
                >
                  <img
                    src={el.img}
                    alt=""
                    className="w-full aspect-square m-auto"
                  />
                  <div className="grid gap-2 p-2">
                    <div>
                      <h4 className="font-semibold">{el.nombre}</h4>
                      <p className="text-xl text-palette-blue font-bold">
                        ${el.precio}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 p-1 w-full">
                      <Counter def={element.itemCount} />
                      <button className="bg-red-600 text-white  text-center col-span-full lg:col-span-1  w-max lg:w-max flex items-center justify-center rounded-md p-2">
                        <IoMdTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 py-2 px-1">
            <div className="text-lg font-medium text-palette-second flex justify-between py-1">
              <p>Subtotal</p>
              <p>${total * 0.84}</p>
            </div>
            <div className="text-lg font-medium text-palette-second flex justify-between py-1">
              <p>Shipping</p>
              <p>{method === "standard" ? "$5" : "$16"}</p>
            </div>
            <div className="text-lg font-medium text-palette-second flex justify-between py-1">
              <p>Taxes</p>
              <p>${total * 0.16}</p>
            </div>

            <div className="border-t-2 py-2 text-xl font-bold text-palette-second flex justify-between">
              <p>Total</p>
              <p>${total + (method === "standard" ? 5 : 16)} </p>
            </div>

            <div className="border-t-2 py-2 text-palette-second ">
              <a href="./orderdetail?orderId=123123123">
                <button
                  type="button"
                  className="p-2 rounded-md bg-palette-second text-white w-full hover:bg-palette-primary font-medium"
                >
                  Confirmar Orden
                </button>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
