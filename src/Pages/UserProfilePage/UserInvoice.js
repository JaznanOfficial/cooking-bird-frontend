import { Table } from "flowbite-react";
import React from "react";

const UserInvoice = () => {
    return (
        <div className="p-10 lg:p-20">
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
                    <div>
                    <Table>
                    <Table.Head>
                      <Table.HeadCell>
                        Product name
                      </Table.HeadCell>
                      <Table.HeadCell>
                        Color
                      </Table.HeadCell>
                      <Table.HeadCell>
                        Category
                      </Table.HeadCell>
                      <Table.HeadCell>
                        Price
                      </Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">
                          Edit
                        </span>
                      </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                          Sliver
                        </Table.Cell>
                        <Table.Cell>
                          Laptop
                        </Table.Cell>
                        <Table.Cell>
                          $2999
                        </Table.Cell>
                        <Table.Cell>
                          <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Edit
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          Microsoft Surface Pro
                        </Table.Cell>
                        <Table.Cell>
                          White
                        </Table.Cell>
                        <Table.Cell>
                          Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                          $1999
                        </Table.Cell>
                        <Table.Cell>
                          <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Edit
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                          Black
                        </Table.Cell>
                        <Table.Cell>
                          Accessories
                        </Table.Cell>
                        <Table.Cell>
                          $99
                        </Table.Cell>
                        <Table.Cell>
                          <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Edit
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInvoice;
