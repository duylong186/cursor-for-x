"use client"

import { HotTable } from "@handsontable/react"
import { registerAllModules } from "handsontable/registry"
import "handsontable/dist/handsontable.full.min.css"

registerAllModules()

export function IncomeStatement() {
  const data = [
    ["Income", "", "", "", "", "", "", ""],
    ["Operating income", "$0", "$128", "$214", "$358", "$450", "$450", "$4"],
    ["Refunds and returns", "$0", "$0", "$0", "$0", "$0", "$0", ""],
    ["Net operating income", "$0", "$128", "$214", "$358", "$450", "$450", "$4"],
    ["COGS - Costs of Goods Sold", "$0", "$0", "$0", "$0", "$0", "-$12", ""],
    ["Gross Margin", "$0", "$128", "$214", "$358", "$450", "$438", "$4"],
    ["Other income", "$0", "$0", "$0", "$0", "$0", "$460", ""],
    ["Expenses", "", "", "", "", "", "", ""],
    ["SG&A - Sales General and Administrative", "$0", "$0", "$0", "$0", "$0", "$0", ""],
    ["R&D - Research and Development", "$0", "$0", "$0", "$0", "$0", "-$7", ""],
    ["Other expenses", "$0", "$0", "$0", "$0", "-$135", "$0", ""],
    ["TOTAL EXPENSES", "$0", "$0", "$0", "$0", "-$135", "-$7", ""],
    ["", "$0", "$128", "$214", "$358", "$315", "$891", "$4"],
    ["CAPEX - Capital Expenditure", "$0", "$0", "$0", "$0", "-$62", "$0", ""],
    ["Earnings Before Interest and Tax", "$0", "$128", "$214", "$358", "$253", "$891", "$4"]
  ]

  const headers = ["", "Jan 21", "Feb 21", "Mar 21", "Apr 21", "May 21", "Jun 21", "Jul 21"]

  const columns = [
    { data: 0, readOnly: true },
    { data: 1 },
    { data: 2 },
    { data: 3 },
    { data: 4 },
    { data: 5 },
    { data: 6 },
    { data: 7 },
  ]

  return (
    <div className="income-statement-container">
      <HotTable
        data={data}
        colHeaders={headers}
        rowHeaders={false}
        columns={columns}
        stretchH="all"
        width="100%"
        height="auto"
        licenseKey="non-commercial-and-evaluation"
        className="htCenter"
        cell={[
          { row: 0, col: 0, className: "section-header" },
          { row: 1, col: 0, className: "indented" },
          { row: 2, col: 0, className: "indented" },
          { row: 4, col: 0, className: "indented" },
          { row: 6, col: 0, className: "indented" },
          { row: 7, col: 0, className: "section-header" },
          { row: 8, col: 0, className: "indented" },
          { row: 9, col: 0, className: "indented" },
          { row: 10, col: 0, className: "indented" },
          { row: 11, col: 0, className: "indented" },
          { row: 13, col: 0, className: "indented" },
        ]}
        mergeCells={[
          { row: 0, col: 0, rowspan: 1, colspan: 8 },
          { row: 7, col: 0, rowspan: 1, colspan: 8 }
        ]}
        afterGetColHeader={(_col, TH) => {
          if (_col >= 1) {
            TH.style.backgroundColor = "#22c55e"
            TH.style.color = "white"
            TH.style.fontWeight = "bold"
            TH.style.padding = "8px"
          }
        }}
        afterGetCellMeta={(row, col, cellProperties) => {
          if (row === 0 || row === 7) {
            cellProperties.className = "section-header"
          }
          if (row === 3 || row === 5 || row === 11 || row === 12 || row === 14) {
            cellProperties.className = "total-row"
          }
        }}
      />
      <style jsx global>{`
        .income-statement-container {
          margin-top: 20px;
          border: 1px solid #d1d5db;
          border-radius: 0;
          overflow: hidden;
        }
        
        .income-statement-container .handsontable {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .income-statement-container .handsontable td {
          border: 1px solid #d1d5db;
          padding: 10px 16px;
          font-size: 13px;
          background-color: white;
          text-align: right;
          color: #374151;
        }
        
        .income-statement-container .handsontable th {
          border: 1px solid #16a34a;
          background-color: #22c55e;
          color: white;
          font-weight: 600;
          padding: 12px 16px;
          font-size: 14px;
          text-align: center;
        }
        
        .income-statement-container .section-header {
          background-color: #e5e7eb !important;
          font-weight: 600 !important;
          text-align: left !important;
          color: #374151;
        }
        
        .income-statement-container .indented {
          padding-left: 32px !important;
          text-align: left !important;
        }
        
        .income-statement-container .total-row {
          font-weight: 600;
          background-color: #f9fafb !important;
        }
        
        .income-statement-container .handsontable td:first-child {
          text-align: left !important;
          background-color: #f3f4f6 !important;
          font-weight: 500;
          color: #374151;
          border-right: 2px solid #d1d5db;
        }
        
        .income-statement-container .handsontable .htDimmed {
          color: #000;
        }
        
        .income-statement-container .handsontable tbody tr:hover td {
          background-color: #f9fafb;
        }
        
        .income-statement-container .handsontable .currentRow {
          background-color: #f3f4f6;
        }
      `}</style>
    </div>
  )
}