/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaProvisionJobData extends KalturaJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQcm92aXNpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CdEUsTUFBTSw4QkFBK0IsU0FBUSxjQUFjOzs7O0lBZ0J2RCxZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgc3RyZWFtSUQ/IDogc3RyaW5nO1xuXHRiYWNrdXBTdHJlYW1JRD8gOiBzdHJpbmc7XG5cdHJ0bXA/IDogc3RyaW5nO1xuXHRlbmNvZGVySVA/IDogc3RyaW5nO1xuXHRiYWNrdXBFbmNvZGVySVA/IDogc3RyaW5nO1xuXHRlbmNvZGVyUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRlbmNvZGVyVXNlcm5hbWU/IDogc3RyaW5nO1xuXHRlbmREYXRlPyA6IG51bWJlcjtcblx0cmV0dXJuVmFsPyA6IHN0cmluZztcblx0bWVkaWFUeXBlPyA6IG51bWJlcjtcblx0cHJpbWFyeUJyb2FkY2FzdGluZ1VybD8gOiBzdHJpbmc7XG5cdHNlY29uZGFyeUJyb2FkY2FzdGluZ1VybD8gOiBzdHJpbmc7XG5cdHN0cmVhbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHN0cmVhbUlEIDogc3RyaW5nO1xuXHRiYWNrdXBTdHJlYW1JRCA6IHN0cmluZztcblx0cnRtcCA6IHN0cmluZztcblx0ZW5jb2RlcklQIDogc3RyaW5nO1xuXHRiYWNrdXBFbmNvZGVySVAgOiBzdHJpbmc7XG5cdGVuY29kZXJQYXNzd29yZCA6IHN0cmluZztcblx0ZW5jb2RlclVzZXJuYW1lIDogc3RyaW5nO1xuXHRlbmREYXRlIDogbnVtYmVyO1xuXHRyZXR1cm5WYWwgOiBzdHJpbmc7XG5cdG1lZGlhVHlwZSA6IG51bWJlcjtcblx0cHJpbWFyeUJyb2FkY2FzdGluZ1VybCA6IHN0cmluZztcblx0c2Vjb25kYXJ5QnJvYWRjYXN0aW5nVXJsIDogc3RyaW5nO1xuXHRzdHJlYW1OYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YScgfSxcblx0XHRcdFx0c3RyZWFtSUQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YmFja3VwU3RyZWFtSUQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cnRtcCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNvZGVySVAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YmFja3VwRW5jb2RlcklQIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuY29kZXJQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNvZGVyVXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kRGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZXR1cm5WYWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFUeXBlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaW1hcnlCcm9hZGNhc3RpbmdVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Vjb25kYXJ5QnJvYWRjYXN0aW5nVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0cmVhbU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEnXSA9IEthbHR1cmFQcm92aXNpb25Kb2JEYXRhOyJdfQ==