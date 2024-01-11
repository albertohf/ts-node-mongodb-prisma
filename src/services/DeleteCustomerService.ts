import prismaClient from "../prisma";

class DeleteCustomerService {

  async execute(id: string) {

    
    if(!id) throw new Error("Id is required");

    const customerExists = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    })

    if(!customerExists) throw new Error("Customer not found");

    await prismaClient.customer.delete({
      where: {
        id: customerExists.id
      },
    })

    // const customer = await prismaClient.customer.delete({
    //   where: {
    //     id,
    //   },
    // });
    return {message: "Customer deleted successfully"}
  }
}

export { DeleteCustomerService };