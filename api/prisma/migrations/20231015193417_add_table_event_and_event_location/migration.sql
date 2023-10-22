-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "generatedWay" INTEGER NOT NULL,
    "position" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "EventLocation" (
    "eventId" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "extension" TEXT,
    "number" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_code_key" ON "Event"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EventLocation_eventId_key" ON "EventLocation"("eventId");

-- AddForeignKey
ALTER TABLE "EventLocation" ADD CONSTRAINT "EventLocation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
