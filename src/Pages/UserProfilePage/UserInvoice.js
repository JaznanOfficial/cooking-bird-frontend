import { Button, Table } from "flowbite-react";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const UserInvoice = () => {
    return (
        
        <Document>
            <div size={"A4"} className="p-10 lg:p-20">
                <div className="shadow-2xl shadow-navy-900 p-10">
                    <div className="flex flex-col lg:flex-row justify-around items-center m-10 gap-4">
                        <div>
                            <img
                                class="img w-32"
                                alt="Invoice Template"
                                src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG59.png"
                            />
                        </div>
                        <div>
                            <h4 style={{ color: "#F81D2D" }}>
                                <strong>Cooking Bird</strong>
                            </h4>
                            <p>221 ,Baker Street</p>
                            <p>1800-234-124</p>
                            <p>cooking@bird.com</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl">Invoice id</h1>
                        <h1>12345674984855165</h1>
                    </div>
                    <div>
                        <div className="w-2/3 mx-auto my-5">
                            <Table striped={true}>
                                <Table.Head>
                                    <Table.HeadCell>Product name</Table.HeadCell>

                                    <Table.HeadCell className="text-end">Price</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-start">
                                            Apple MacBook Pro 17"
                                        </Table.Cell>

                                        <Table.Cell className="text-end">$2999</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell class="text-right">
                                            <p>
                                                <strong>Shipment and Taxes:</strong>
                                            </p>
                                            <p>
                                                <strong>Total Amount: </strong>
                                            </p>
                                            <p>
                                                <strong>Discount: </strong>
                                            </p>
                                            <p>
                                                <strong>Payable Amount: </strong>
                                            </p>
                                        </Table.Cell>
                                        <Table.Cell className="text-right">
                                            <p>
                                                <strong>500 </strong>
                                            </p>
                                            <p>
                                                <strong>82,900</strong>
                                            </p>
                                            <p>
                                                <strong>3,000 </strong>
                                            </p>
                                            <p>
                                                <strong>79,900</strong>
                                            </p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell class="text-right text-red-600 text-2xl">
                                            <p>
                                                <strong>Total:</strong>
                                            </p>
                                        </Table.Cell>
                                        <Table.Cell className="text-red-600 text-2xl text-right">
                                            <p>
                                                <strong>500 </strong>
                                            </p>
                                        </Table.Cell>
                                    </Table.Row>

                                    <div className="p-3 flex justify-start items-center">
                                        <Button color="purple" pill={true}>
                                            Print
                                        </Button>
                                    </div>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Document>
    );
};

export default UserInvoice;
