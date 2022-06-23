import Link from "../src/components/Link";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function curriculo() {
  return (
    <div>
      <Typography variant="h4">ERRO 404</Typography>
      <Typography variant="h5">Caminho indisponível</Typography>
      <Link href="/">
        <Button variant="outlined">Ir para Home</Button>
      </Link>
    </div>
  );
}
