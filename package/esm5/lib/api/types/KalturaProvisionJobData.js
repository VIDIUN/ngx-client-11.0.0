/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaProvisionJobDataArgs() { }
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.streamID;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.backupStreamID;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.rtmp;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.encoderIP;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.backupEncoderIP;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.encoderPassword;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.encoderUsername;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.endDate;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.returnVal;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.mediaType;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.primaryBroadcastingUrl;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.secondaryBroadcastingUrl;
/** @type {?|undefined} */
KalturaProvisionJobDataArgs.prototype.streamName;
var KalturaProvisionJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaProvisionJobData, _super);
    function KalturaProvisionJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaProvisionJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaProvisionJobData' },
            streamID: { type: 's' },
            backupStreamID: { type: 's' },
            rtmp: { type: 's' },
            encoderIP: { type: 's' },
            backupEncoderIP: { type: 's' },
            encoderPassword: { type: 's' },
            encoderUsername: { type: 's' },
            endDate: { type: 'n' },
            returnVal: { type: 's' },
            mediaType: { type: 'n' },
            primaryBroadcastingUrl: { type: 's' },
            secondaryBroadcastingUrl: { type: 's' },
            streamName: { type: 's' }
        });
        return result;
    };
    return KalturaProvisionJobData;
}(KalturaJobData));
export { KalturaProvisionJobData };
if (false) {
    /** @type {?} */
    KalturaProvisionJobData.prototype.streamID;
    /** @type {?} */
    KalturaProvisionJobData.prototype.backupStreamID;
    /** @type {?} */
    KalturaProvisionJobData.prototype.rtmp;
    /** @type {?} */
    KalturaProvisionJobData.prototype.encoderIP;
    /** @type {?} */
    KalturaProvisionJobData.prototype.backupEncoderIP;
    /** @type {?} */
    KalturaProvisionJobData.prototype.encoderPassword;
    /** @type {?} */
    KalturaProvisionJobData.prototype.encoderUsername;
    /** @type {?} */
    KalturaProvisionJobData.prototype.endDate;
    /** @type {?} */
    KalturaProvisionJobData.prototype.returnVal;
    /** @type {?} */
    KalturaProvisionJobData.prototype.mediaType;
    /** @type {?} */
    KalturaProvisionJobData.prototype.primaryBroadcastingUrl;
    /** @type {?} */
    KalturaProvisionJobData.prototype.secondaryBroadcastingUrl;
    /** @type {?} */
    KalturaProvisionJobData.prototype.streamName;
}
typesMappingStorage['KalturaProvisionJobData'] = KalturaProvisionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQcm92aXNpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnRFLElBQUE7SUFBNkMsbURBQWM7SUFnQnZELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0FqRUw7RUFxQjZDLGNBQWMsRUE2QzFELENBQUE7QUE3Q0QsbUNBNkNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQcm92aXNpb25Kb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIHN0cmVhbUlEPyA6IHN0cmluZztcblx0YmFja3VwU3RyZWFtSUQ/IDogc3RyaW5nO1xuXHRydG1wPyA6IHN0cmluZztcblx0ZW5jb2RlcklQPyA6IHN0cmluZztcblx0YmFja3VwRW5jb2RlcklQPyA6IHN0cmluZztcblx0ZW5jb2RlclBhc3N3b3JkPyA6IHN0cmluZztcblx0ZW5jb2RlclVzZXJuYW1lPyA6IHN0cmluZztcblx0ZW5kRGF0ZT8gOiBudW1iZXI7XG5cdHJldHVyblZhbD8gOiBzdHJpbmc7XG5cdG1lZGlhVHlwZT8gOiBudW1iZXI7XG5cdHByaW1hcnlCcm9hZGNhc3RpbmdVcmw/IDogc3RyaW5nO1xuXHRzZWNvbmRhcnlCcm9hZGNhc3RpbmdVcmw/IDogc3RyaW5nO1xuXHRzdHJlYW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBzdHJlYW1JRCA6IHN0cmluZztcblx0YmFja3VwU3RyZWFtSUQgOiBzdHJpbmc7XG5cdHJ0bXAgOiBzdHJpbmc7XG5cdGVuY29kZXJJUCA6IHN0cmluZztcblx0YmFja3VwRW5jb2RlcklQIDogc3RyaW5nO1xuXHRlbmNvZGVyUGFzc3dvcmQgOiBzdHJpbmc7XG5cdGVuY29kZXJVc2VybmFtZSA6IHN0cmluZztcblx0ZW5kRGF0ZSA6IG51bWJlcjtcblx0cmV0dXJuVmFsIDogc3RyaW5nO1xuXHRtZWRpYVR5cGUgOiBudW1iZXI7XG5cdHByaW1hcnlCcm9hZGNhc3RpbmdVcmwgOiBzdHJpbmc7XG5cdHNlY29uZGFyeUJyb2FkY2FzdGluZ1VybCA6IHN0cmluZztcblx0c3RyZWFtTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdHN0cmVhbUlEIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJhY2t1cFN0cmVhbUlEIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJ0bXAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5jb2RlcklQIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJhY2t1cEVuY29kZXJJUCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNvZGVyUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5jb2RlclVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZERhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmV0dXJuVmFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcmltYXJ5QnJvYWRjYXN0aW5nVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlY29uZGFyeUJyb2FkY2FzdGluZ1VybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1OYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQcm92aXNpb25Kb2JEYXRhJ10gPSBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YTsiXX0=