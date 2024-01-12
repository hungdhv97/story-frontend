import { useAtom } from 'jotai';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { updatedStoriesResponseAtom } from '@/atoms/updatedStoriesResponseAtom';

const invoices = [
    {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
];

export function UpdatedStoriesTable() {
    const [updatedStoriesResponse] = useAtom(updatedStoriesResponseAtom);
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Tiêu Đề</TableHead>
                    <TableHead>Thể Loại</TableHead>
                    <TableHead>Chương Cuối</TableHead>
                    <TableHead>Cập Nhật</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {updatedStoriesResponse.map((story) => (
                    <TableRow key={story.id}>
                        <TableCell className="font-medium">
                            {story.title}
                        </TableCell>
                        <TableCell>{story.title}</TableCell>
                        <TableCell>{story.title}</TableCell>
                        <TableCell className="text-right">
                            {story.title}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
