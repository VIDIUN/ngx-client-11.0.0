/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
/**
 * @record
 */
export function KalturaWebexDropFolderFileArgs() { }
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.recordingId;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.webexHostId;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.description;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.confId;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.contentUrl;
export class KalturaWebexDropFolderFile extends KalturaDropFolderFile {
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
            objectType: { type: 'c', default: 'KalturaWebexDropFolderFile' },
            recordingId: { type: 'n' },
            webexHostId: { type: 's' },
            description: { type: 's' },
            confId: { type: 's' },
            contentUrl: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.recordingId;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.webexHostId;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.description;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.confId;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.contentUrl;
}
typesMappingStorage['KalturaWebexDropFolderFile'] = KalturaWebexDropFolderFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXM0YsTUFBTSxpQ0FBa0MsU0FBUSxxQkFBcUI7Ozs7SUFRakUsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlLCBLYWx0dXJhRHJvcEZvbGRlckZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVBcmdzIHtcbiAgICByZWNvcmRpbmdJZD8gOiBudW1iZXI7XG5cdHdlYmV4SG9zdElkPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRjb25mSWQ/IDogc3RyaW5nO1xuXHRjb250ZW50VXJsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGUgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGUge1xuXG4gICAgcmVjb3JkaW5nSWQgOiBudW1iZXI7XG5cdHdlYmV4SG9zdElkIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0Y29uZklkIDogc3RyaW5nO1xuXHRjb250ZW50VXJsIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZScgfSxcblx0XHRcdFx0cmVjb3JkaW5nSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2ViZXhIb3N0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29uZklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRVcmwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGUnXSA9IEthbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlOyJdfQ==