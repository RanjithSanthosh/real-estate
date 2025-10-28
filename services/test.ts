import fs from "fs";
import PDFDocument from "pdfkit";
import {
  authorization,
  getSiteVariables,
  getFeaturedProperties,
  getPropertyTypes,
  getCities,
  getBuilders,
  getCollections,
  getAmenities,
  getCMSMetadata,
  getPropertyById,
  getBuilderById,
} from "./api.js";

async function generatePDF() {
  const doc = new PDFDocument({ size: "A4", margin: 30 });
  doc.pipe(fs.createWriteStream("prismic_api_responses.pdf"));

  const data: Record<string, any> = {};

  function addSection(title: string, json: any) {
    doc
      .addPage()
      .font("Helvetica-Bold")
      .fontSize(14)
      .fillColor("blue")
      .text(title, { underline: true });
    doc.moveDown(0.5);
    doc.font("Courier").fontSize(10).fillColor("black");
    doc.text(JSON.stringify(json, null, 2), { width: 500 });
  }

  console.log("Fetching authorization...");
  const auth = await authorization();
  if (!auth) {
    console.error("Authorization failed!");
    return;
  }
  const masterRef = auth.refs?.find((r: any) => r.isMasterRef)?.ref as string;
  const integrationFieldsRef = auth.integrationFieldsRef;
  addSection("Authorization Response", auth);

  console.log("Fetching Site Variables...");
  const siteVars = await getSiteVariables(masterRef, integrationFieldsRef);
  addSection("Site Variables", siteVars);

  console.log("Fetching Featured Properties...");
  const featuredProps = await getFeaturedProperties(
    1,
    3,
    masterRef,
    integrationFieldsRef
  );
  addSection("Featured Properties", featuredProps);

  console.log("Fetching Property Types...");
  const propertyTypes = await getPropertyTypes(masterRef, integrationFieldsRef);
  addSection("Property Types", propertyTypes);

  console.log("Fetching Cities...");
  const cities = await getCities(masterRef, integrationFieldsRef);
  addSection("Cities", cities);

  console.log("Fetching Builders...");
  const builders = await getBuilders(masterRef, integrationFieldsRef);
  addSection("Builders", builders);

  console.log("Fetching Collections...");
  const collections = await getCollections(masterRef, integrationFieldsRef);
  addSection("Collections", collections);

  console.log("Fetching Amenities...");
  const amenities = await getAmenities(masterRef, integrationFieldsRef);
  addSection("Amenities", amenities);

  console.log("Fetching CMS Metadata...");
  const cmsMeta = await getCMSMetadata();
  addSection("CMS Metadata", cmsMeta);

  console.log("Fetching a sample Property by ID...");
  const sampleProperty = await getPropertyById(
    "Y-wVLRIAACOvTPY1",
    masterRef,
    integrationFieldsRef
  );
  addSection("Sample Property by ID", sampleProperty);

  console.log("Fetching a sample Builder by ID...");
  const sampleBuilder = await getBuilderById(
    "Y8UbzhEAACsAovEx",
    masterRef,
    integrationFieldsRef
  );
  addSection("Sample Builder by ID", sampleBuilder);

  doc.end();
  console.log("✅ PDF generated: prismic_api_responses.pdf");
}

generatePDF().catch((err) => console.error("Error generating PDF:", err));
