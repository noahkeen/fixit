let  fix_fields = {
  "1": {
    "name": "Account",
    "desc": "Account mnemonic as agreed between broker and institution."
  },
  "2": {
    "name": "AdvId",
    "desc": "Unique identifier of Advertisement (7) message."
  },
  "3": {
    "name": "AdvRefID",
    "desc": "Reference identifier used with CANCEL and REPLACE transaction types."
  },
  "4": {
    "name": "AdvSide",
    "desc": "Broker's side of advertised trade"
  },
  "5": {
    "name": "AdvTransType",
    "desc": "Identifies Advertisement (7) message transaction type"
  },
  "6": {
    "name": "AvgPx",
    "desc": "Calculated average price of all fills on this order."
  },
  "7": {
    "name": "BeginSeqNo",
    "desc": "Message sequence number of first message in range to be resent"
  },
  "8": {
    "name": "BeginString",
    "desc": "Identifies beginning of new message and protocol version. ALWAYS FIRST FIELD IN MESSAGE. (Always unencrypted)"
  },
  "9": {
    "name": "BodyLength",
    "desc": "Message length, in bytes, is verified by counting the number of characters in the message following the BodyLength (9) field up to, and including, the delimiter immediately preceding the CheckSum (10) field. ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted) For example, for message 8=FIX 4.4^9=5^35=0^10=10^, the BodyLength is 5 for 35=0^"
  },
  "10": {
    "name": "CheckSum",
    "desc": "Three byte, simple checksum (see Appendix B: CheckSum Calculation of FIX Specification for description). ALWAYS LAST FIELD IN MESSAGE; i.e. serves, with the trailing <SOH>, as the end-of-message delimiter. Always defined as three characters. (Always unencrypted)"
  },
  "11": {
    "name": "ClOrdID",
    "desc": "Unique identifier for Order as assigned by institution (identified by SenderCompID (49) or OnBehalfOfCompID (115) as appropriate). Uniqueness must be guaranteed within a single trading day. Firms, particularly those which electronically submit multi-day orders, trade globally or throughout market close periods, should ensure uniqueness across days, for example by embedding a date within the ClOrdID (11) field."
  },
  "12": {
    "name": "Commission",
    "desc": "Commission. Note if CommType (13) is percentage, Commission of 5% should be represented as .05."
  },
  "13": {
    "name": "CommType",
    "desc": "Commission type"
  },
  "14": {
    "name": "CumQty",
    "desc": "Total number of shares filled."
  },
  "15": {
    "name": "Currency",
    "desc": "Identifies currency used for price. Absence of this field is interpreted as the default for the security. It is recommended that systems provide the currency value whenever possible."
  },
  "16": {
    "name": "EndSeqNo",
    "desc": "Message sequence number of last message in range to be resent. If request is for a single message BeginSeqNo (7) = EndSeqNo (16) . If request is for all messages subsequent to a particular message, EndSeqNo (16) = '0' (representing infinity)."
  },
  "17": {
    "name": "ExecID",
    "desc": "Unique identifier of Execution Report (8) message as assigned by broker (will be 0 (zero) for ExecTransType (20) =3 (Status))."
  },
  "18": {
    "name": "ExecInst",
    "desc": "Instructions for order handling on exchange trading floor. If more than one instruction is applicable to an order, this field can contain multiple instructions separated by space."
  },
  "19": {
    "name": "ExecRefID",
    "desc": "Reference identifier used with Cancel and Correct transaction types."
  },
  "20": {
    "name": "ExecTransType",
    "desc": "Identifies transaction type"
  },
  "21": {
    "name": "HandlInst",
    "desc": "Instructions for order handling on Broker trading floor"
  },
  "22": {
    "name": "IDSource",
    "desc": "Identifies class of alternative SecurityID (48)"
  },
  "23": {
    "name": "IOIid",
    "desc": "Unique identifier of Indication of Interest (6) message."
  },
  "25": {
    "name": "IOIQltyInd",
    "desc": "Relative quality of indication"
  },
  "26": {
    "name": "IOIRefID",
    "desc": "Reference identifier used with CANCEL and REPLACE, transaction types."
  },
  "27": {
    "name": "IOIShares",
    "desc": "Number of shares in numeric or relative size."
  },
  "28": {
    "name": "IOITransType",
    "desc": "Identifies Indication of Interest (6) message transaction type"
  },
  "29": {
    "name": "LastCapacity",
    "desc": "Broker capacity in order execution"
  },
  "30": {
    "name": "LastMkt",
    "desc": "Market of execution for last fill"
  },
  "31": {
    "name": "LastPx",
    "desc": "Price of this (last) fill. Field not required for ExecTransType (20) = 3 (Status)"
  },
  "32": {
    "name": "LastShares",
    "desc": "Quantity of shares bought/sold on this (last) fill. Field not required for ExecTransType (20) = 3 (Status)"
  },
  "33": {
    "name": "LinesOfText",
    "desc": "Identifies number of lines of text body"
  },
  "34": {
    "name": "MsgSeqNum",
    "desc": "Integer message sequence number."
  },
  "35": {
    "name": "MsgType",
    "desc": "Defines message type. ALWAYS THIRD FIELD IN MESSAGE. (Always unencrypted)"
  },
  "36": {
    "name": "NewSeqNo",
    "desc": "New sequence number"
  },
  "37": {
    "name": "OrderID",
    "desc": "Unique identifier for Order as assigned by broker. Uniqueness must be guaranteed within a single trading day. Firms which accept multi-day orders should consider embedding a date within the OrderID (37) field to assure uniqueness across days."
  },
  "38": {
    "name": "OrderQty",
    "desc": "Number of shares ordered. This represents the number of shares for equities or based on normal convention the number of contracts for options, futures, convertible bonds, etc."
  },
  "39": {
    "name": "OrdStatus",
    "desc": "Identifies current status of order."
  },
  "40": {
    "name": "OrdType",
    "desc": "Order type."
  },
  "41": {
    "name": "OrigClOrdID",
    "desc": "ClOrdID (11) of the previous order (NOT the initial order of the day) as assigned by the institution, used to identify the previous order in cancel and cancel/replace requests."
  },
  "42": {
    "name": "OrigTime",
    "desc": "Time of message origination (always expressed in UTC (Universal Time Coordinated, also known as 'GMT'))"
  },
  "43": {
    "name": "PossDupFlag",
    "desc": "Indicates possible retransmission of message with this sequence number"
  },
  "44": {
    "name": "Price",
    "desc": "Price per share"
  },
  "45": {
    "name": "RefSeqNum",
    "desc": "Reference message sequence number"
  },
  "46": {
    "name": "RelatdSym",
    "desc": "Symbol of issue related to story. Can be repeated within message to identify multiple companies."
  },
  "47": {
    "name": "Rule80A",
    "desc": "Note that the name of this field is changing to 'OrderCapacity' as Rule80A is a very US market-specific term. Other world markets need to convey similar information, however, often a subset of the US values. See the 'Rule80A (aka OrderCapacity) Usage by Market' appendix for market-specific usage of this field."
  },
  "48": {
    "name": "SecurityID",
    "desc": "CUSIP or other alternate security identifier"
  },
  "49": {
    "name": "SenderCompID",
    "desc": "Assigned value used to identify firm sending message."
  },
  "50": {
    "name": "SenderSubID",
    "desc": "Assigned value used to identify specific message originator (desk, trader, etc.)"
  },
  "52": {
    "name": "SendingTime",
    "desc": "Time of message transmission (always expressed in UTC (Universal Time Coordinated, also known as 'GMT')"
  },
  "53": {
    "name": "Shares",
    "desc": "Number of shares"
  },
  "54": {
    "name": "Side",
    "desc": "Side of order"
  },
  "55": {
    "name": "Symbol",
    "desc": "Ticker symbol"
  },
  "56": {
    "name": "TargetCompID",
    "desc": "Assigned value used to identify receiving firm."
  },
  "57": {
    "name": "TargetSubID",
    "desc": "Assigned value used to identify specific individual or unit intended to receive message. 'ADMIN' reserved for administrative messages not intended for a specific user."
  },
  "58": {
    "name": "Text",
    "desc": "Free format text string"
  },
  "59": {
    "name": "TimeInForce",
    "desc": "Specifies how long the order remains in effect. Absence of this field is interpreted as DAY."
  },
  "60": {
    "name": "TransactTime",
    "desc": "Time of execution/order creation (expressed in UTC (Universal Time Coordinated), also known as 'GMT')"
  },
  "61": {
    "name": "Urgency",
    "desc": "Urgency flag"
  },
  "62": {
    "name": "ValidUntilTime",
    "desc": "Indicates expiration time of indication message (always expressed in UTC (Universal Time Coordinated), also known as 'GMT')"
  },
  "63": {
    "name": "SettlmntTyp",
    "desc": "Indicates order settlement period. Absence of this field is interpreted as Regular. Regular is defined as the default settlement period for the particular security on the exchange of execution."
  },
  "64": {
    "name": "FutSettDate",
    "desc": "Specific date of trade settlement (SettlementDate) in YYYYMMDD format. Required when SettlmntTyp (63) = 6 (Future) or SettlmntTyp (63) = 8 (Sellers Option)."
  },
  "65": {
    "name": "SymbolSfx",
    "desc": "Additional information about the security (e.g. preferred, warrants, etc.). Note also see SecurityType (167) . Valid values: As defined in the NYSE Stock and bond Symbol Directory and in the AMEX Fitch Directory"
  },
  "66": {
    "name": "ListID",
    "desc": "Unique identifier for list as assigned by institution, used to associate multiple individual orders. Uniqueness must be guaranteed within a single trading day. Firms which generate multi-day orders should consider embedding a date within the ListID (66) field to assure uniqueness across days."
  },
  "67": {
    "name": "ListSeqNo",
    "desc": "Sequence of individual order within list (i.e. ListSeqNo (67) of TotNoOrders (68) , 2 of 25, 3 of 25, . . . )"
  },
  "68": {
    "name": "TotNoOrders",
    "desc": "(formerly named: ListNoOrds) Total number of list order entries across all messages. Should be the sum of all NoOrders (73) in each message that has repeating list order entries related to the same ListID (66) . Used to support fragmentation."
  },
  "69": {
    "name": "ListExecInst",
    "desc": "Free format text message containing list handling and execution instructions."
  },
  "70": {
    "name": "AllocID",
    "desc": "Unique identifier for Allocation (J) message."
  },
  "71": {
    "name": "AllocTransType",
    "desc": "Identifies allocation transaction type"
  },
  "72": {
    "name": "RefAllocID",
    "desc": "Reference identifier to be used with Replace, Cancel, and Calculated AllocTransType (71) messages."
  },
  "73": {
    "name": "NoOrders",
    "desc": "Indicates number of orders to be combined for average pricing and allocation."
  },
  "74": {
    "name": "AvgPrxPrecision",
    "desc": "Indicates number of decimal places to be used for average pricing. Absence of this field indicates that default precision arranged by the broker/institution is to be used."
  },
  "75": {
    "name": "TradeDate",
    "desc": "Indicates date of trade referenced in this message in YYYYMMDD format. Absence of this field indicates current day (expressed in local time at place of trade)."
  },
  "76": {
    "name": "ExecBroker",
    "desc": "Identifies executing / give-up broker. Standard NASD market-maker mnemonic is preferred."
  },
  "77": {
    "name": "OpenClose",
    "desc": "Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together."
  },
  "78": {
    "name": "NoAllocs",
    "desc": "Number of repeating AllocAccount (79) / AllocPrice (366) entries."
  },
  "79": {
    "name": "AllocAccount",
    "desc": "Sub-account mnemonic"
  },
  "80": {
    "name": "AllocShares",
    "desc": "Number of shares to be allocated to specific sub-account"
  },
  "81": {
    "name": "ProcessCode",
    "desc": "Processing code for sub-account. Absence of this field in AllocAccount (79) / AllocPrice (366) / AllocQty (80) / ProcessCode (81) instance indicates regular trade."
  },
  "82": {
    "name": "NoRpts",
    "desc": "Total number of reports within series."
  },
  "83": {
    "name": "RptSeq",
    "desc": "Sequence number of message within report series."
  },
  "84": {
    "name": "CxlQty",
    "desc": "Total number of shares canceled for this order."
  },
  "87": {
    "name": "AllocStatus",
    "desc": "Identifies status of allocation."
  },
  "88": {
    "name": "AllocRejCode",
    "desc": "Identifies reason for rejection."
  },
  "89": {
    "name": "Signature",
    "desc": "Electronic signature"
  },
  "90": {
    "name": "SecureDataLen",
    "desc": "Length of encrypted message"
  },
  "91": {
    "name": "SecureData",
    "desc": "Actual encrypted data stream"
  },
  "92": {
    "name": "BrokerOfCredit",
    "desc": "Broker to receive trade credit."
  },
  "93": {
    "name": "SignatureLength",
    "desc": "Number of bytes in signature field."
  },
  "94": {
    "name": "EmailType",
    "desc": "Email message type."
  },
  "95": {
    "name": "RawDataLength",
    "desc": "Number of bytes in raw data field."
  },
  "96": {
    "name": "RawData",
    "desc": "Unformatted raw data, can include bitmaps, word processor documents, etc."
  },
  "97": {
    "name": "PossResend",
    "desc": "Indicates that message may contain information that has been sent under another sequence number. Valid Values: Y=Possible resend N=Original transmission"
  },
  "98": {
    "name": "EncryptMethod",
    "desc": "Method of encryption."
  },
  "99": {
    "name": "StopPx",
    "desc": "Price per share"
  },
  "100": {
    "name": "ExDestination",
    "desc": "Execution destination as defined by institution when order is entered."
  },
  "102": {
    "name": "CxlRejReason",
    "desc": "Code to identify reason for cancel rejection."
  },
  "103": {
    "name": "OrdRejReason",
    "desc": "Code to identify reason for order rejection."
  },
  "104": {
    "name": "IOIQualifier",
    "desc": "Code to qualify Indication of Interest (6) use."
  },
  "105": {
    "name": "WaveNo",
    "desc": "Identifier to aid in the management of multiple lists derived from a single, master list."
  },
  "106": {
    "name": "Issuer",
    "desc": "Company name of security issuer (e.g. International Business Machines)"
  },
  "107": {
    "name": "SecurityDesc",
    "desc": "Security description."
  },
  "108": {
    "name": "HeartBtInt",
    "desc": "Heartbeat interval (seconds)"
  },
  "109": {
    "name": "ClientID",
    "desc": "Firm identifier used in third party-transactions (should not be a substitute for OnBehalfOfCompID (115) / DeliverToCompID (128) )."
  },
  "110": {
    "name": "MinQty",
    "desc": "Minimum quantity of an order to be executed."
  },
  "111": {
    "name": "MaxFloor",
    "desc": "Maximum number of shares within an order to be shown on the exchange floor at any given time."
  },
  "112": {
    "name": "TestReqID",
    "desc": "Identifier included in Test Request (1) message to be returned in resulting Heartbeat (0)"
  },
  "113": {
    "name": "ReportToExch",
    "desc": "Identifies party of trade responsible for exchange reporting."
  },
  "114": {
    "name": "LocateReqd",
    "desc": "Indicates whether the broker is to locate the stock in conjunction with a short sell order."
  },
  "115": {
    "name": "OnBehalfOfCompID",
    "desc": "Assigned value used to identify firm originating message if the message was delivered by a third party i.e. the third party firm identifier would be delivered in the SenderCompID (49) field and the firm originating the message in this field."
  },
  "116": {
    "name": "OnBehalfOfSubID",
    "desc": "Assigned value used to identify specific message originator (i.e. trader) if the message was delivered by a third party"
  },
  "117": {
    "name": "QuoteID",
    "desc": "Unique identifier for quote"
  },
  "118": {
    "name": "NetMoney",
    "desc": "Total amount due as the result of the transaction (e.g. for Buy order - principal + commission + fees) reported in currency of execution."
  },
  "119": {
    "name": "SettlCurrAmt",
    "desc": "Total amount due expressed in settlement currency (includes the effect of the forex transaction)"
  },
  "120": {
    "name": "SettlCurrency",
    "desc": "Currency code of settlement denomination."
  },
  "121": {
    "name": "ForexReq",
    "desc": "Indicates request for forex accommodation trade to be executed along with security transaction."
  },
  "122": {
    "name": "OrigSendingTime",
    "desc": "Original time of message transmission (always expressed in UTC (Universal Time Coordinated, also known as 'GMT') when transmitting orders as the result of a resend request."
  },
  "123": {
    "name": "GapFillFlag",
    "desc": "Indicates that the Sequence Reset (4) message is replacing administrative or application messages which will not be resent."
  },
  "124": {
    "name": "NoExecs",
    "desc": "No of execution repeating group entries to follow."
  },
  "126": {
    "name": "ExpireTime",
    "desc": "Time/Date of order expiration (always expressed in UTC (Universal Time Coordinated, also known as 'GMT')"
  },
  "127": {
    "name": "DKReason",
    "desc": "Reason for execution rejection."
  },
  "128": {
    "name": "DeliverToCompID",
    "desc": "Assigned value used to identify the firm targeted to receive the message if the message is delivered by a third party i.e. the third party firm identifier would be delivered in the TargetCompID (56) field and the ultimate receiver firm ID in this field."
  },
  "129": {
    "name": "DeliverToSubID",
    "desc": "Assigned value used to identify specific message recipient (i.e. trader) if the message is delivered by a third party"
  },
  "130": {
    "name": "IOINaturalFlag",
    "desc": "Indicates that Indication of Interest (6) is the result of an existing agency order or a facilitation position resulting from an agency order, not from principal trading or order solicitation activity."
  },
  "131": {
    "name": "QuoteReqID",
    "desc": "Unique identifier for Quote Request (R)"
  },
  "132": {
    "name": "BidPx",
    "desc": "Bid price/rate"
  },
  "133": {
    "name": "OfferPx",
    "desc": "Offer price/rate"
  },
  "134": {
    "name": "BidSize",
    "desc": "Quantity of bid"
  },
  "135": {
    "name": "OfferSize",
    "desc": "Quantity of offer"
  },
  "136": {
    "name": "NoMiscFees",
    "desc": "Number of repeating groups of miscellaneous fees"
  },
  "137": {
    "name": "MiscFeeAmt",
    "desc": "Miscellaneous fee value"
  },
  "138": {
    "name": "MiscFeeCurr",
    "desc": "Currency of miscellaneous fee"
  },
  "139": {
    "name": "MiscFeeType",
    "desc": "Indicates type of miscellaneous fee."
  },
  "140": {
    "name": "PrevClosePx",
    "desc": "Previous closing price of security."
  },
  "141": {
    "name": "ResetSeqNumFlag",
    "desc": "Indicates that the both sides of the FIX session should reset sequence numbers."
  },
  "142": {
    "name": "SenderLocationID",
    "desc": "Assigned value used to identify specific message originator's location (i.e. geographic location and/or desk, trader)"
  },
  "143": {
    "name": "TargetLocationID",
    "desc": "Assigned value used to identify specific message destination's location (i.e. geographic location and/or desk, trader)"
  },
  "144": {
    "name": "OnBehalfOfLocationID",
    "desc": "Assigned value used to identify specific message originator's location (i.e. geographic location and/or desk, trader) if the message was delivered by a third party"
  },
  "145": {
    "name": "DeliverToLocationID",
    "desc": "Assigned value used to identify specific message recipient's location (i.e. geographic location and/or desk, trader) if the message was delivered by a third party"
  },
  "146": {
    "name": "NoRelatedSym",
    "desc": "Specifies the number of repeating symbols specified."
  },
  "147": {
    "name": "Subject",
    "desc": "The subject of an Email (C) message"
  },
  "148": {
    "name": "Headline",
    "desc": "The headline of a News (B) message"
  },
  "149": {
    "name": "URLLink",
    "desc": "A URL (Uniform Resource Locator) link to additional information (i.e. http://en.wikipedia.org/wiki/Uniform_Resource_Locator )"
  },
  "150": {
    "name": "ExecType",
    "desc": "Describes the specific Execution Report (8) (i.e. Pending Cancel) while OrdStatus (39) will always identify the current order status (i.e. Partially Filled)"
  },
  "151": {
    "name": "LeavesQty",
    "desc": "Amount of shares open for further execution. If the OrdStatus (39) is Canceled, DoneForTheDay, Expired, Calculated, or Rejected (in which case the order is no longer active) then LeavesQty (151) could be 0, otherwise LeavesQty (151) = OrderQty (38) - CumQty (14) ."
  },
  "152": {
    "name": "CashOrderQty",
    "desc": "Specifies the approximate order quantity desired in total monetary units vs. as a number of shares. The broker would be responsible for converting and calculating a share quantity ( OrderQty (38) ) based upon this amount to be used for the actual order and subsequent messages."
  },
  "153": {
    "name": "AllocAvgPx",
    "desc": "AvgPx (6) for a specific AllocAccount (79)"
  },
  "154": {
    "name": "AllocNetMoney",
    "desc": "NetMoney (118) for a specific AllocAccount (79)"
  },
  "155": {
    "name": "SettlCurrFxRate",
    "desc": "Foreign exchange rate used to compute SettlCurrAmt (119) from Currency (15) to SettlCurrency (120)"
  },
  "156": {
    "name": "SettlCurrFxRateCalc",
    "desc": "Specifies whether or not SettlCurrFxRate (155) should be multiplied or divided."
  },
  "157": {
    "name": "NumDaysInterest",
    "desc": "Number of Days of Interest for convertible bonds and fixed income"
  },
  "158": {
    "name": "AccruedInterestRate",
    "desc": "Accrued Interest Rate for convertible bonds and fixed income"
  },
  "159": {
    "name": "AccruedInterestAmt",
    "desc": "Amount of Accrued Interest for convertible bonds and fixed income"
  },
  "160": {
    "name": "SettlInstMode",
    "desc": "Indicates mode used for Settlement Instructions"
  },
  "161": {
    "name": "AllocText",
    "desc": "Free format text related to a specific AllocAccount (79) ."
  },
  "162": {
    "name": "SettlInstID",
    "desc": "Unique identifier for Settlement Instructions (T) message."
  },
  "163": {
    "name": "SettlInstTransType",
    "desc": "Settlement Instructions (T) message transaction type"
  },
  "164": {
    "name": "EmailThreadID",
    "desc": "Unique identifier for an email thread (new and chain of replies)"
  },
  "165": {
    "name": "SettlInstSource",
    "desc": "Indicates source of Settlement Instructions (T)"
  },
  "166": {
    "name": "SettlLocation",
    "desc": "Identifies Settlement Depository or Country Code (ISITC spec)"
  },
  "167": {
    "name": "SecurityType",
    "desc": "Indicates type of security (ISITC spec)"
  },
  "168": {
    "name": "EffectiveTime",
    "desc": "Time the details within the message should take effect (always expressed in UTC (Universal Time Coordinated, also known as 'GMT')"
  },
  "169": {
    "name": "StandInstDbType",
    "desc": "Identifies the Standing Instruction database used"
  },
  "170": {
    "name": "StandInstDbName",
    "desc": "Name of the Standing Instruction database represented with StandInstDbType (169) (i.e. the Global Custodian's name)."
  },
  "171": {
    "name": "StandInstDbID",
    "desc": "Unique identifier used on the Standing Instructions database for the Standing Instructions to be referenced."
  },
  "172": {
    "name": "SettlDeliveryType",
    "desc": "Identifies type of settlement"
  },
  "173": {
    "name": "SettlDepositoryCode",
    "desc": "Broker's account code at the depository (i.e. CEDEL ID for CEDEL, FINS for DTC, or Euroclear ID for Euroclear) if SettlLocation is a depository"
  },
  "174": {
    "name": "SettlBrkrCode",
    "desc": "BIC (Bank Identification Code-Swift managed) code of the broker involved (i.e. for multi-company brokerage firms)"
  },
  "175": {
    "name": "SettlInstCode",
    "desc": "BIC (Bank Identification Code-Swift managed) code of the institution involved (i.e. for multi-company institution firms)"
  },
  "176": {
    "name": "SecuritySettlAgentName",
    "desc": "Name of SettlInstSource's local agent bank if SettlLocation (166) is not a depository"
  },
  "177": {
    "name": "SecuritySettlAgentCode",
    "desc": "BIC (Bank Identification Code-Swift managed) code of the SettlInstSource's local agent bank if SettlLocation (166) is not a depository"
  },
  "178": {
    "name": "SecuritySettlAgentAcctNum",
    "desc": "SettlInstSource's account number at local agent bank if SettlLocation (166) is not a depository"
  },
  "179": {
    "name": "SecuritySettlAgentAcctName",
    "desc": "Name of SettlInstSource's account at local agent bank if SettlLocation (166) is not a depository"
  },
  "180": {
    "name": "SecuritySettlAgentContactName",
    "desc": "Name of contact at local agent bank for SettlInstSource's account if SettlLocation (166) is not a depository"
  },
  "181": {
    "name": "SecuritySettlAgentContactPhone",
    "desc": "Phone number for contact at local agent bank if SettlLocation (166) is not a depository"
  },
  "182": {
    "name": "CashSettlAgentName",
    "desc": "Name of SettlInstSource's local agent bank if SettlDeliveryType (172) =Free"
  },
  "183": {
    "name": "CashSettlAgentCode",
    "desc": "BIC (Bank Identification Code-Swift managed) code of the SettlInstSource's local agent bank if SettlDeliveryType (172) =Free"
  },
  "184": {
    "name": "CashSettlAgentAcctNum",
    "desc": "SettlInstSource's account number at local agent bank if SettlDeliveryType (172) =Free"
  },
  "185": {
    "name": "CashSettlAgentAcctName",
    "desc": "Name of SettlInstSource's account at local agent bank if SettlDeliveryType (172) =Free"
  },
  "186": {
    "name": "CashSettlAgentContactName",
    "desc": "Name of contact at local agent bank for SettlInstSource's account if SettlDeliveryType (172) =Free"
  },
  "187": {
    "name": "CashSettlAgentContactPhone",
    "desc": "Phone number for contact at local agent bank for SettlInstSource's account if SettlDeliveryType (172) =Free"
  },
  "188": {
    "name": "BidSpotRate",
    "desc": "Bid F/X spot rate."
  },
  "189": {
    "name": "BidForwardPoints",
    "desc": "Bid F/X forward points added to spot rate. May be a negative value."
  },
  "190": {
    "name": "OfferSpotRate",
    "desc": "Offer F/X spot rate."
  },
  "191": {
    "name": "OfferForwardPoints",
    "desc": "Offer F/X forward points added to spot rate. May be a negative value."
  },
  "192": {
    "name": "OrderQty2",
    "desc": "OrderQty (38) of the future part of a F/X swap order."
  },
  "193": {
    "name": "FutSettDate2",
    "desc": "FutSettDate (64) of the future part of a F/X swap order."
  },
  "194": {
    "name": "LastSpotRate",
    "desc": "F/X spot rate."
  },
  "195": {
    "name": "LastForwardPoints",
    "desc": "F/X forward points added to LastSpotRate (194) . May be a negative value."
  },
  "196": {
    "name": "AllocLinkID",
    "desc": "Can be used to link two different Allocation (J) messages (each with unique AllocID (70) ) together, i.e. for F/X 'Netting' or 'Swaps'. Should be unique."
  },
  "197": {
    "name": "AllocLinkType",
    "desc": "Identifies the type of Allocation (J) linkage when AllocLinkID (196) is used."
  },
  "198": {
    "name": "SecondaryOrderID",
    "desc": "Assigned by the party which accepts the order. Can be used to provide the OrderID (37) used by an exchange or executing system."
  },
  "199": {
    "name": "NoIOIQualifiers",
    "desc": "Number of repeating groups of IOIQualifiers."
  },
  "200": {
    "name": "MaturityMonthYear",
    "desc": "Month and Year of the maturity for SecurityType (167) =FUT or SecurityType (167) =OPT. Required if MaturityDay is specified. Format: YYYYMM (i.e. 199903)"
  },
  "201": {
    "name": "PutOrCall",
    "desc": "Indicates whether an Option is for a put or call."
  },
  "202": {
    "name": "StrikePrice",
    "desc": "Strike Price for an Option."
  },
  "203": {
    "name": "CoveredOrUncovered",
    "desc": "Used for options"
  },
  "204": {
    "name": "CustomerOrFirm",
    "desc": "Used for options when delivering the order to an execution system/exchange to specify if the order is for a customer or the firm placing the order itself."
  },
  "205": {
    "name": "MaturityDay",
    "desc": "Day of month used in conjunction with MaturityMonthYear (200) to specify the maturity date for SecurityType (167) =FUT or SecurityType (167) =OPT."
  },
  "206": {
    "name": "OptAttribute",
    "desc": "Can be used for SecurityType (167) =OPT to identify a particular security. Valid values vary by SecurityExchange: For Exchange: MONEP (Paris) L = Long (a.k.a. 'American') S = Short (a.k.a. 'European') For Exchanges: DTB (Frankfurt), HKSE (Hong Kong), and SOFFEX (Zurich) 0-9 = single digit 'version' number assigned by exchange following capital adjustments (0=current, 1=prior, 2=prior to 1, etc)."
  },
  "207": {
    "name": "SecurityExchange",
    "desc": "Market used to help identify a security."
  },
  "208": {
    "name": "NotifyBrokerOfCredit",
    "desc": "Indicates whether or not details should be communicated to BrokerOfCredit (92) (i.e. step-in broker)."
  },
  "209": {
    "name": "AllocHandlInst",
    "desc": "Indicates how the receiver (i.e. third party) of Allocation (J) message should handle/process the account details."
  },
  "210": {
    "name": "MaxShow",
    "desc": "Maximum number of shares within an order to be shown to other customers (i.e. sent via an Indication of Interest (6) )."
  },
  "211": {
    "name": "PegDifference",
    "desc": "Amount (signed) added to the price of the peg for a pegged order."
  },
  "212": {
    "name": "XmlDataLen",
    "desc": "Length of the XmlData (213) data block."
  },
  "213": {
    "name": "XmlData",
    "desc": "Actual XML data stream (e.g. FIXML). See appropriate XML reference (e.g. FIXML). Note: may contain embedded SOH characters."
  },
  "214": {
    "name": "SettlInstRefID",
    "desc": "Reference identifier for the SettlInstID (162) with Cancel and Replace SettlInstTransType (163) transaction types."
  },
  "215": {
    "name": "NoRoutingIDs",
    "desc": "Number of repeating groups of RoutingID (217) and RoutingType (216) values."
  },
  "216": {
    "name": "RoutingType",
    "desc": "Indicates the type of RoutingID (217) specified."
  },
  "217": {
    "name": "RoutingID",
    "desc": "Assigned value used to identify a specific routing destination."
  },
  "218": {
    "name": "SpreadToBenchmark",
    "desc": "For Fixed Income. Basis points relative to a benchmark. To be expressed as 'count of basis points' (vs. an absolute value). E.g. High Grade Corporate Bonds may express price as basis points relative to benchmark (the Benchmark field). Note: Basis points can be negative."
  },
  "219": {
    "name": "Benchmark",
    "desc": "For Fixed Income. Identifies the benchmark (e.g. used in conjunction with the SpreadToBenchmark (218) field)."
  },
  "223": {
    "name": "CouponRate",
    "desc": "For Fixed Income. Coupon rate of the bond. Will be zero for step-up bonds."
  },
  "231": {
    "name": "ContractMultiplier",
    "desc": "Specifies the ratio or multiply factor to convert from contracts to shares (e.g. 1.0, 100, 1000, etc). Applicable For Fixed Income, Convertible Bonds, Derivatives, etc. Note: If used, quantities should be expressed in the 'nominal' (e.g. contracts vs. shares) amount."
  },
  "262": {
    "name": "MDReqID",
    "desc": "Unique identifier for Market Data Request (V)"
  },
  "263": {
    "name": "SubscriptionRequestType",
    "desc": "Subscription Request Type"
  },
  "264": {
    "name": "MarketDepth",
    "desc": "Depth of market for Book Snapshot"
  },
  "265": {
    "name": "MDUpdateType",
    "desc": "Specifies the type of Market Data update."
  },
  "266": {
    "name": "AggregatedBook",
    "desc": "Specifies whether or not book entries should be aggregated. If not specified - broker option"
  },
  "267": {
    "name": "NoMDEntryTypes",
    "desc": "Number of MDEntryType (269) fields requested."
  },
  "268": {
    "name": "NoMDEntries",
    "desc": "Number of entries in Market Data message."
  },
  "269": {
    "name": "MDEntryType",
    "desc": "Type Market Data entry."
  },
  "270": {
    "name": "MDEntryPx",
    "desc": "Price of the Market Data Entry."
  },
  "271": {
    "name": "MDEntrySize",
    "desc": "Number of shares represented by the Market Data Entry."
  },
  "272": {
    "name": "MDEntryDate",
    "desc": "Date of Market Data Entry."
  },
  "273": {
    "name": "MDEntryTime",
    "desc": "Time of Market Data Entry."
  },
  "274": {
    "name": "TickDirection",
    "desc": "Direction of the 'tick'."
  },
  "275": {
    "name": "MDMkt",
    "desc": "Market posting quote / trade."
  },
  "276": {
    "name": "QuoteCondition",
    "desc": "Space-delimited list of conditions describing a quote."
  },
  "277": {
    "name": "TradeCondition",
    "desc": "Space-delimited list of conditions describing a trade"
  },
  "278": {
    "name": "MDEntryID",
    "desc": "Unique Market Data Entry identifier."
  },
  "279": {
    "name": "MDUpdateAction",
    "desc": "Type of Market Data update action."
  },
  "280": {
    "name": "MDEntryRefID",
    "desc": "Refers to a previous MDEntryID (278) ."
  },
  "281": {
    "name": "MDReqRejReason",
    "desc": "Reason for the rejection of a Market Data Request (V) ."
  },
  "282": {
    "name": "MDEntryOriginator",
    "desc": "Originator of a Market Data Entry"
  },
  "283": {
    "name": "LocationID",
    "desc": "Identification of a Market Maker's location"
  },
  "284": {
    "name": "DeskID",
    "desc": "Identification of a Market Maker's desk"
  },
  "285": {
    "name": "DeleteReason",
    "desc": "Reason for deletion."
  },
  "286": {
    "name": "OpenCloseSettleFlag",
    "desc": "Flag that identifies a price."
  },
  "287": {
    "name": "SellerDays",
    "desc": "Specifies the number of days that may elapse before delivery of the security"
  },
  "288": {
    "name": "MDEntryBuyer",
    "desc": "Buying party in a trade"
  },
  "289": {
    "name": "MDEntrySeller",
    "desc": "Selling party in a trade"
  },
  "290": {
    "name": "MDEntryPositionNo",
    "desc": "Display position of a bid or offer, numbered from most competitive to least competitive, per market side, beginning with 1."
  },
  "291": {
    "name": "FinancialStatus",
    "desc": "Identifies a firm's financial status."
  },
  "292": {
    "name": "CorporateAction",
    "desc": "Identifies the type of Corporate Action."
  },
  "293": {
    "name": "DefBidSize",
    "desc": "Default Bid Size."
  },
  "294": {
    "name": "DefOfferSize",
    "desc": "Default Offer Size."
  },
  "295": {
    "name": "NoQuoteEntries",
    "desc": "The number of quote entries for a QuoteSet."
  },
  "296": {
    "name": "NoQuoteSets",
    "desc": "The number of sets of quotes in the message."
  },
  "297": {
    "name": "QuoteAckStatus",
    "desc": "Identifies the status of the quote acknowledgement."
  },
  "298": {
    "name": "QuoteCancelType",
    "desc": "Identifies the type of quote cancel."
  },
  "299": {
    "name": "QuoteEntryID",
    "desc": "Uniquely identifies the quote as part of a QuoteSet."
  },
  "300": {
    "name": "QuoteRejectReason",
    "desc": "Reason quote was rejected."
  },
  "301": {
    "name": "QuoteResponseLevel",
    "desc": "Level of Response requested from receiver of Quote (S) messages."
  },
  "302": {
    "name": "QuoteSetID",
    "desc": "Unique id for the QuoteSet."
  },
  "303": {
    "name": "QuoteRequestType",
    "desc": "Indicates the type of Quote Request (R) being generated"
  },
  "304": {
    "name": "TotQuoteEntries",
    "desc": "Total number of quotes for the QuoteSet across all messages. Should be the sum of all NoQuoteEntries (295) in each message that has repeating quotes that are part of the same QuoteSet."
  },
  "305": {
    "name": "UnderlyingIDSource",
    "desc": "Underlying security's IDSource. See IDSource (22) field for description"
  },
  "306": {
    "name": "UnderlyingIssuer",
    "desc": "Underlying security's Issuer. See Issuer (106) field for description"
  },
  "307": {
    "name": "UnderlyingSecurityDesc",
    "desc": "Underlying security's SecurityDesc. See SecurityDesc (107) field for description"
  },
  "308": {
    "name": "UnderlyingSecurityExchange",
    "desc": "Underlying security's SecurityExchange. Can be used to identify the underlying security."
  },
  "309": {
    "name": "UnderlyingSecurityID",
    "desc": "Underlying security's SecurityID. See SecurityID (48) field for description"
  },
  "310": {
    "name": "UnderlyingSecurityType",
    "desc": "Underlying security's SecurityType. See SecurityType (167) field for description"
  },
  "311": {
    "name": "UnderlyingSymbol",
    "desc": "Underlying security's Symbol. See Symbol (55) field for description"
  },
  "312": {
    "name": "UnderlyingSymbolSfx",
    "desc": "Underlying security's SymbolSfx. See SymbolSfx (65) field for description"
  },
  "313": {
    "name": "UnderlyingMaturityMonthYear",
    "desc": "Underlying security's MaturityMonthYear. Required if UnderlyingMaturityDay (314) is specified. See MaturityMonthYear (200) field for description"
  },
  "314": {
    "name": "UnderlyingMaturityDay",
    "desc": "Underlying security's MaturityDay. See MaturityDay (205) field for description"
  },
  "315": {
    "name": "UnderlyingPutOrCall",
    "desc": "Underlying security's PutOrCall. See PutOrCall (201) field for description"
  },
  "316": {
    "name": "UnderlyingStrikePrice",
    "desc": "Underlying security's StrikePrice. See StrikePrice (202) field for description"
  },
  "317": {
    "name": "UnderlyingOptAttribute",
    "desc": "Underlying security's OptAttribute. See OptAttribute (206) field for description"
  },
  "318": {
    "name": "UnderlyingCurrency",
    "desc": "Underlying security's Currency. See Currency (15) field for description and valid values"
  },
  "319": {
    "name": "RatioQty",
    "desc": "Quantity of a particular leg in the security."
  },
  "320": {
    "name": "SecurityReqID",
    "desc": "Unique ID of a Security Definition Request (c) ."
  },
  "321": {
    "name": "SecurityRequestType",
    "desc": "Type of Security Definition Request (c) ."
  },
  "322": {
    "name": "SecurityResponseID",
    "desc": "Unique ID of a Security Definition (d) message."
  },
  "323": {
    "name": "SecurityResponseType",
    "desc": "Type of Security Definition (d) message response."
  },
  "324": {
    "name": "SecurityStatusReqID",
    "desc": "Unique ID of a Security Status Request (e) message."
  },
  "325": {
    "name": "UnsolicitedIndicator",
    "desc": "Indicates whether or not message is being sent as a result of a subscription request or not."
  },
  "326": {
    "name": "SecurityTradingStatus",
    "desc": "Identifies the trading status applicable to the transaction."
  },
  "327": {
    "name": "HaltReason",
    "desc": "Denotes the reason for the Opening Delay or Trading Halt."
  },
  "328": {
    "name": "InViewOfCommon",
    "desc": "Indicates whether or not the halt was due to Common Stock trading being halted."
  },
  "329": {
    "name": "DueToRelated",
    "desc": "Indicates whether or not the halt was due to the Related Security being halted."
  },
  "330": {
    "name": "BuyVolume",
    "desc": "Number of shares bought."
  },
  "331": {
    "name": "SellVolume",
    "desc": "Number of shares sold."
  },
  "332": {
    "name": "HighPx",
    "desc": "Represents an indication of the high end of the price range for a security prior to the open or reopen"
  },
  "333": {
    "name": "LowPx",
    "desc": "Represents an indication of the low end of the price range for a security prior to the open or reopen"
  },
  "334": {
    "name": "Adjustment",
    "desc": "Identifies the type of adjustment."
  },
  "335": {
    "name": "TradSesReqID",
    "desc": "Unique ID of a Trading Session Status (h) message."
  },
  "336": {
    "name": "TradingSessionID",
    "desc": "Identifier for Trading Session."
  },
  "337": {
    "name": "ContraTrader",
    "desc": "Identifies the trader (e.g. \"badge number\") of the ContraBroker (375) ."
  },
  "338": {
    "name": "TradSesMethod",
    "desc": "Method of trading"
  },
  "339": {
    "name": "TradSesMode",
    "desc": "Trading Session Mode"
  },
  "340": {
    "name": "TradSesStatus",
    "desc": "State of the trading session."
  },
  "341": {
    "name": "TradSesStartTime",
    "desc": "Starting time of the trading session"
  },
  "342": {
    "name": "TradSesOpenTime",
    "desc": "Time of the opening of the trading session"
  },
  "343": {
    "name": "TradSesPreCloseTime",
    "desc": "Time of the pre-closed of the trading session"
  },
  "344": {
    "name": "TradSesCloseTime",
    "desc": "Closing time of the trading session"
  },
  "345": {
    "name": "TradSesEndTime",
    "desc": "End time of the trading session"
  },
  "346": {
    "name": "NumberOfOrders",
    "desc": "Number of orders in the market."
  },
  "347": {
    "name": "MessageEncoding",
    "desc": "Type of message encoding (non-ASCII (non-English) characters) used in a message's \"Encoded\" fields."
  },
  "348": {
    "name": "EncodedIssuerLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedIssuer (349) field."
  },
  "349": {
    "name": "EncodedIssuer",
    "desc": "Encoded (non-ASCII characters) representation of the Issuer (106) field in the encoded format specified via the MessageEncoding field. If used, the ASCII (English) representation should also be specified in the Issuer (106) field."
  },
  "350": {
    "name": "EncodedSecurityDescLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedSecurityDesc (351) field."
  },
  "351": {
    "name": "EncodedSecurityDesc",
    "desc": "Encoded (non-ASCII characters) representation of the SecurityDesc (107) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the SecurityDesc (107) field."
  },
  "352": {
    "name": "EncodedListExecInstLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedListExecInst (353) field."
  },
  "353": {
    "name": "EncodedListExecInst",
    "desc": "Encoded (non-ASCII characters) representation of the ListExecInst (69) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ListExecInst (69) field."
  },
  "354": {
    "name": "EncodedTextLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedText (355) field."
  },
  "355": {
    "name": "EncodedText",
    "desc": "Encoded (non-ASCII characters) representation of the Text (58) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Text (58) field."
  },
  "356": {
    "name": "EncodedSubjectLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedSubject (357) field."
  },
  "357": {
    "name": "EncodedSubject",
    "desc": "Encoded (non-ASCII characters) representation of the Subject (147) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Subject (147) field."
  },
  "358": {
    "name": "EncodedHeadlineLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedHeadline (359) field."
  },
  "359": {
    "name": "EncodedHeadline",
    "desc": "Encoded (non-ASCII characters) representation of the Headline (148) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Headline (148) field."
  },
  "360": {
    "name": "EncodedAllocTextLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedAllocText (361) field."
  },
  "361": {
    "name": "EncodedAllocText",
    "desc": "Encoded (non-ASCII characters) representation of the AllocText (161) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the AllocText (161) field."
  },
  "362": {
    "name": "EncodedUnderlyingIssuerLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedUnderlyingIssuer (363) field."
  },
  "363": {
    "name": "EncodedUnderlyingIssuer",
    "desc": "Encoded (non-ASCII characters) representation of the UnderlyingIssuer (306) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingIssuer (306) field."
  },
  "364": {
    "name": "EncodedUnderlyingSecurityDescLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedUnderlyingSecurityDesc (365) field."
  },
  "365": {
    "name": "EncodedUnderlyingSecurityDesc",
    "desc": "Encoded (non-ASCII characters) representation of the UnderlyingSecurityDesc (307) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingSecurityDesc (307) field."
  },
  "366": {
    "name": "AllocPrice",
    "desc": "Executed price for an AllocAccount (79) entry used when using \"executed price\" vs. \"average price\" allocations (e.g. Japan)."
  },
  "367": {
    "name": "QuoteSetValidUntilTime",
    "desc": "Indicates expiration time of this particular QuoteSet (always expressed in UTC (Universal Time Coordinated, also known as 'GMT')"
  },
  "368": {
    "name": "QuoteEntryRejectReason",
    "desc": "Reason Quote Entry was rejected:"
  },
  "369": {
    "name": "LastMsgSeqNumProcessed",
    "desc": "The last MsgSeqNum (34) value received and processed. Can be specified on every message sent. Useful for detecting a backlog with a counterparty."
  },
  "370": {
    "name": "OnBehalfOfSendingTime",
    "desc": "Used when a message is sent via a \"hub\" or \"service bureau\". If A sends to Q (the hub) who then sends to B via a separate FIX session, then when Q sends to B the value of this field should represent the SendingTime (52) on the message A sent to Q. (always expressed in UTC (Universal Time Coordinated, also known as \"GMT\")"
  },
  "371": {
    "name": "RefTagID",
    "desc": "The tag number of the FIX field being referenced."
  },
  "372": {
    "name": "RefMsgType",
    "desc": "The MsgType (35) of the FIX message being referenced."
  },
  "373": {
    "name": "SessionRejectReason",
    "desc": "Code to identify reason for a session-level Reject (3) message."
  },
  "374": {
    "name": "BidRequestTransType",
    "desc": "Identifies the Bid Request (k) message type."
  },
  "375": {
    "name": "ContraBroker",
    "desc": "Identifies contra broker. Standard NASD market-maker mnemonic is preferred."
  },
  "376": {
    "name": "ComplianceID",
    "desc": "ID used to represent this transaction for compliance purposes (e.g. OATS reporting)."
  },
  "377": {
    "name": "SolicitedFlag",
    "desc": "Indicates whether or not the order was solicited."
  },
  "378": {
    "name": "ExecRestatementReason",
    "desc": "Code to identify reason for an Execution Report (8) message sent with ExecType (150) =Restated or used when communicating an unsolicited cancel."
  },
  "379": {
    "name": "BusinessRejectRefID",
    "desc": "The value of the business-level 'ID' field on the message being referenced."
  },
  "380": {
    "name": "BusinessRejectReason",
    "desc": "Code to identify reason for a Business Message Reject (j) message."
  },
  "381": {
    "name": "GrossTradeAmt",
    "desc": "Total amount traded (e.g. CumQty (14) * AvgPx (6) ) expressed in units of currency."
  },
  "382": {
    "name": "NoContraBrokers",
    "desc": "The number of ContraBroker (375) entries."
  },
  "383": {
    "name": "MaxMessageSize",
    "desc": "Maximum number of bytes supported for a single message."
  },
  "384": {
    "name": "NoMsgTypes",
    "desc": "Number of MsgTypes in repeating group."
  },
  "385": {
    "name": "MsgDirection",
    "desc": "Specifies the direction of the messsage."
  },
  "386": {
    "name": "NoTradingSessions",
    "desc": "Number of TradingSessionIDs in repeating group."
  },
  "387": {
    "name": "TotalVolumeTraded",
    "desc": "Total volume (quantity) traded."
  },
  "388": {
    "name": "DiscretionInst",
    "desc": "Code to identify the price a DiscretionOffset (389) is related to and should be mathematically added to."
  },
  "389": {
    "name": "DiscretionOffset",
    "desc": "Amount (signed) added to the 'related to' price specified via DiscretionInst (388) ."
  },
  "390": {
    "name": "BidID",
    "desc": "Unique identifier for Bid Response (l) as assigned by broker. Uniqueness must be guaranteed within a single trading day."
  },
  "391": {
    "name": "ClientBidID",
    "desc": "Unique identifier for a Bid Request (k) as assigned by institution. Uniqueness must be guaranteed within a single trading day."
  },
  "392": {
    "name": "ListName",
    "desc": "Descriptive name for list order."
  },
  "393": {
    "name": "TotalNumSecurities",
    "desc": "Total number of securities."
  },
  "394": {
    "name": "BidType",
    "desc": "Code to identify the type of Bid Request (k) ."
  },
  "395": {
    "name": "NumTickets",
    "desc": "Total number of tickets."
  },
  "396": {
    "name": "SideValue1",
    "desc": "Amounts in currency"
  },
  "397": {
    "name": "SideValue2",
    "desc": "Amounts in currency"
  },
  "398": {
    "name": "NoBidDescriptors",
    "desc": "Number of BidDescriptor entries."
  },
  "399": {
    "name": "BidDescriptorType",
    "desc": "Code to identify the type of BidDescriptor."
  },
  "400": {
    "name": "BidDescriptor",
    "desc": "BidDescriptor value. Usage depends upon BidDescriptorType (399) ."
  },
  "401": {
    "name": "SideValueInd",
    "desc": "Code to identify which \"SideValue\" the value refers to. SideValue1 and SideValue2 are used as opposed to Buy or Sell so that the basket can be quoted either way as Buy or Sell."
  },
  "402": {
    "name": "LiquidityPctLow",
    "desc": "Liquidity indicator or lower limit if TotalNumSecurities (393) > 1. Represented as a percentage."
  },
  "403": {
    "name": "LiquidityPctHigh",
    "desc": "Upper liquidity indicator if TotalNumSecurities (393) > 1. Represented as a percentage."
  },
  "404": {
    "name": "LiquidityValue",
    "desc": "Value between LiquidityPctLow (402) and LiquidityPctHigh (403) in Currency (15)"
  },
  "405": {
    "name": "EFPTrackingError",
    "desc": "Eg Used in EFP trades 12% (EFP - Exchange for Physical ). Represented as a percentage."
  },
  "406": {
    "name": "FairValue",
    "desc": "Used in EFP trades"
  },
  "407": {
    "name": "OutsideIndexPct",
    "desc": "Used in EFP trades. Represented as a percentage."
  },
  "408": {
    "name": "ValueOfFutures",
    "desc": "Used in EFP trades"
  },
  "409": {
    "name": "LiquidityIndType",
    "desc": "Code to identify the type of liquidity indicator."
  },
  "410": {
    "name": "WtAverageLiquidity",
    "desc": "Overall weighted average liquidity expressed as a % of average daily volume. Represented as a percentage."
  },
  "411": {
    "name": "ExchangeForPhysical",
    "desc": "Indicates whether or not to exchange for phsyical."
  },
  "412": {
    "name": "OutMainCntryUIndex",
    "desc": "Value of stocks in Currency (15)"
  },
  "413": {
    "name": "CrossPercent",
    "desc": "Percentage of program that crosses in Currency (15) . Represented as a percentage."
  },
  "414": {
    "name": "ProgRptReqs",
    "desc": "Code to identify the desired frequency of progress reports."
  },
  "415": {
    "name": "ProgPeriodInterval",
    "desc": "Time in minutes between each List Status (N) report sent by SellSide. Zero means don't send status."
  },
  "416": {
    "name": "IncTaxInd",
    "desc": "Code to represent whether value is net (inclusive of tax) or gross."
  },
  "417": {
    "name": "NumBidders",
    "desc": "Indicates the total number of bidders on the list"
  },
  "418": {
    "name": "TradeType",
    "desc": "Code to represent the type of trade."
  },
  "419": {
    "name": "BasisPxType",
    "desc": "Code to represent the basis price type."
  },
  "420": {
    "name": "NoBidComponents",
    "desc": "Indicates the number of list entries."
  },
  "421": {
    "name": "Country",
    "desc": "ISO Country Code in field"
  },
  "422": {
    "name": "TotNoStrikes",
    "desc": "Total number of strike price entries across all messages. Should be the sum of all NoStrikes (428) in each message that has repeating strike price entries related to the same ListID (66) . Used to support fragmentation."
  },
  "423": {
    "name": "PriceType",
    "desc": "Code to represent the price type."
  },
  "424": {
    "name": "DayOrderQty",
    "desc": "For GT orders, the OrderQty (38) less all shares (adjusted for stock splits) that traded on previous days."
  },
  "425": {
    "name": "DayCumQty",
    "desc": "The number of shares on a GT order that have traded today."
  },
  "426": {
    "name": "DayAvgPx",
    "desc": "The average price of shares on a GT order that have traded today."
  },
  "427": {
    "name": "GTBookingInst",
    "desc": "Code to identify whether to book out executions on a part-filled GT order on the day of execution or to accumulate."
  },
  "428": {
    "name": "NoStrikes",
    "desc": "Number of list strike price entries."
  },
  "429": {
    "name": "ListStatusType",
    "desc": "Code to represent the price type."
  },
  "430": {
    "name": "NetGrossInd",
    "desc": "Code to represent whether value is net (inclusive of tax) or gross."
  },
  "431": {
    "name": "ListOrderStatus",
    "desc": "Code to represent the status of a list order."
  },
  "432": {
    "name": "ExpireDate",
    "desc": "Date of order expiration (last day the order can trade), always expressed in terms of the local market date. The time at which the order expires is determined by the local market's business practices"
  },
  "433": {
    "name": "ListExecInstType",
    "desc": "Identifies the type of ListExecInst (69) ."
  },
  "434": {
    "name": "CxlRejResponseTo",
    "desc": "Identifies the type of request that a Order Cancel Reject (9) is in response to."
  },
  "435": {
    "name": "UnderlyingCouponRate",
    "desc": "Underlying security's CouponRate."
  },
  "436": {
    "name": "UnderlyingContractMultiplier",
    "desc": "Underlying security's ContractMultiplier."
  },
  "437": {
    "name": "ContraTradeQty",
    "desc": "Quantity traded with the ContraBroker (375) ."
  },
  "438": {
    "name": "ContraTradeTime",
    "desc": "Identifes the time of the trade with the ContraBroker (375) . (always expressed in UTC (Universal Time Coordinated, also known as 'GMT')"
  },
  "439": {
    "name": "ClearingFirm",
    "desc": "Firm that will clear the trade. Used if different from the executing firm."
  },
  "440": {
    "name": "ClearingAccount",
    "desc": "Supplemental accounting information forwared to clearing house/firm."
  },
  "441": {
    "name": "LiquidityNumSecurities",
    "desc": "Number of Securites between LiquidityPctLow (402) and LiquidityPctHigh (403) in Currency (15) ."
  },
  "442": {
    "name": "MultiLegReportingType",
    "desc": "Used to indicate what an Execution Report (8) represents (e.g. used with multi-leg securiteis, such as option strategies, spreads, etc.)."
  },
  "443": {
    "name": "StrikeTime",
    "desc": "The time at which current market prices are used to determine the value of a basket."
  },
  "444": {
    "name": "ListStatusText",
    "desc": "Free format text string related to List Status (N) ."
  },
  "445": {
    "name": "EncodedListStatusTextLen",
    "desc": "Byte length of encoded (non-ASCII characters) EncodedListStatusText (446) field."
  },
  "446": {
    "name": "EncodedListStatusText",
    "desc": "Encoded (non-ASCII characters) representation of the ListStatusText (444) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ListStatusText (444) field."
  }
}