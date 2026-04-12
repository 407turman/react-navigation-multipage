import Table from 'react-bootstrap/Table';

export default function Products() {
  return (
    <div id="products" className="w-75 mx-auto mb-4">
      <h2 className="mb-3">Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td>Fruit</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Carrot</td>
            <td>Vegetable</td>
            <td>$0.75</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
