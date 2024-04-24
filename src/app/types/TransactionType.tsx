export interface TransactionType {
    amount: number;
    metadata: {
        name: string;
        type: string;
        email: string;
        quantity: number;
        country: string;
        product_name: string;
    };
    payment_reference: string;
    status: "successful" | "failed";
    type: "deposit" | "withdrawal";
    date: string;
}
