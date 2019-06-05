/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from "./kaltura-request";
/** @typedef {?} */
var ProgressCallback;
export { ProgressCallback };
/**
 * @record
 */
export function KalturaUploadRequestArgs() { }
/** @type {?|undefined} */
KalturaUploadRequestArgs.prototype.uploadedFileSize;
/**
 * @template T
 */
export class KalturaUploadRequest extends KalturaRequest {
    /**
     * @param {?} data
     * @param {?} __1
     */
    constructor(data, { responseType, responseSubType, responseConstructor }) {
        super(data, { responseType, responseSubType, responseConstructor });
        this.uploadedFileSize = 0;
        this.uploadedFileSize = data.uploadedFileSize;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    setProgress(callback) {
        this._progressCallback = callback;
        return this;
    }
    /**
     * @return {?}
     */
    _getProgressCallback() {
        return this._progressCallback;
    }
    /**
     * @return {?}
     */
    supportChunkUpload() {
        const { properties } = this._getMetadata();
        /** @type {?} */
        const responseSupportChunk = this._responseConstructor ? (new this._responseConstructor()).hasMetadataProperty("uploadedFileSize") : false;
        return responseSupportChunk
            && !!properties["resume"]
            && !!properties["resumeAt"]
            && !!properties["finalChunk"];
    }
    /**
     * @return {?}
     */
    getFileInfo() {
        /** @type {?} */
        const metadataProperties = this._getMetadata().properties;
        /** @type {?} */
        const filePropertyName = Object.keys(metadataProperties).find(propertyName => metadataProperties[propertyName].type === "f");
        return filePropertyName ? { propertyName: filePropertyName, file: this[filePropertyName] } : null;
    }
    /**
     * @return {?}
     */
    toRequestObject() {
        /** @type {?} */
        const result = super.toRequestObject();
        const { propertyName: filePropertyName } = this.getFileInfo();
        if (filePropertyName) {
            delete result[filePropertyName];
        }
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUploadRequest.prototype._progressCallback;
    /** @type {?} */
    KalturaUploadRequest.prototype.uploadedFileSize;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS11cGxvYWQtcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkva2FsdHVyYS11cGxvYWQtcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVN2RSxNQUFNLDJCQUErQixTQUFRLGNBQWlCOzs7OztJQUkxRCxZQUFZLElBQThCLEVBQUUsRUFBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUF3RztRQUNuTSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxDQUFDLENBQUM7Z0NBSHBDLENBQUM7UUFJL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUNqRDs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBMEI7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7Ozs7SUFFTSxvQkFBb0I7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7SUFHM0Isa0JBQWtCO1FBRXJCLE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBQ3pDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0ksTUFBTSxDQUFDLG9CQUFvQjtlQUNwQixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztlQUN0QixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztlQUN4QixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7OztJQUcvQixXQUFXOztRQUNkLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQzs7UUFDMUQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRTdILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Ozs7SUFHL0YsZUFBZTs7UUFDbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDOztDQUVyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tIFwiLi9rYWx0dXJhLXJlcXVlc3RcIjtcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlIH0gZnJvbSBcIi4va2FsdHVyYS1vYmplY3QtYmFzZVwiO1xuXG5leHBvcnQgdHlwZSBQcm9ncmVzc0NhbGxiYWNrID0gKGxvYWRlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gIHVwbG9hZGVkRmlsZVNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxUPiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PFQ+IHtcbiAgICBwcml2YXRlIF9wcm9ncmVzc0NhbGxiYWNrOiBQcm9ncmVzc0NhbGxiYWNrO1xuICAgIHB1YmxpYyB1cGxvYWRlZEZpbGVTaXplOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzLCB7cmVzcG9uc2VUeXBlLCByZXNwb25zZVN1YlR5cGUsIHJlc3BvbnNlQ29uc3RydWN0b3J9OiB7IHJlc3BvbnNlVHlwZTogc3RyaW5nLCByZXNwb25zZVN1YlR5cGU/OiBzdHJpbmcsIHJlc3BvbnNlQ29uc3RydWN0b3I6IHsgbmV3KCk6IEthbHR1cmFPYmplY3RCYXNlIH0gfSkge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlLCByZXNwb25zZVN1YlR5cGUsIHJlc3BvbnNlQ29uc3RydWN0b3J9KTtcbiAgICAgICAgdGhpcy51cGxvYWRlZEZpbGVTaXplID0gZGF0YS51cGxvYWRlZEZpbGVTaXplO1xuICAgIH1cblxuICAgIHNldFByb2dyZXNzKGNhbGxiYWNrOiBQcm9ncmVzc0NhbGxiYWNrKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIF9nZXRQcm9ncmVzc0NhbGxiYWNrKCk6IFByb2dyZXNzQ2FsbGJhY2sge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VwcG9ydENodW5rVXBsb2FkKCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBjaHVuayB1cGxvYWQgY3VycmVudGx5IGFzc3VtZSBzdXBwb3J0IGFjY29yZGluZyB0byByZXF1ZXN0L3Jlc2Vwb25zZSBwcm9wZXJ0aWVzLiBTaG91bGQgZ2V0IHRoaXMgaW5mb3JtYXRpb24gZnJvbSB0aGUgY2xpZW50LWdlbmVyYXRvciBkaXJlY3RseS5cbiAgICAgICAgY29uc3Qge3Byb3BlcnRpZXN9ID0gdGhpcy5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VTdXBwb3J0Q2h1bmsgPSB0aGlzLl9yZXNwb25zZUNvbnN0cnVjdG9yID8gKG5ldyB0aGlzLl9yZXNwb25zZUNvbnN0cnVjdG9yKCkpLmhhc01ldGFkYXRhUHJvcGVydHkoXCJ1cGxvYWRlZEZpbGVTaXplXCIpIDogZmFsc2U7XG4gICAgICAgIHJldHVybiByZXNwb25zZVN1cHBvcnRDaHVua1xuICAgICAgICAgICAgJiYgISFwcm9wZXJ0aWVzW1wicmVzdW1lXCJdXG4gICAgICAgICAgICAmJiAhIXByb3BlcnRpZXNbXCJyZXN1bWVBdFwiXVxuICAgICAgICAgICAgJiYgISFwcm9wZXJ0aWVzW1wiZmluYWxDaHVua1wiXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZUluZm8oKTogeyBmaWxlOiBGaWxlLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyB9IHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGFQcm9wZXJ0aWVzID0gdGhpcy5fZ2V0TWV0YWRhdGEoKS5wcm9wZXJ0aWVzO1xuICAgICAgICBjb25zdCBmaWxlUHJvcGVydHlOYW1lID0gT2JqZWN0LmtleXMobWV0YWRhdGFQcm9wZXJ0aWVzKS5maW5kKHByb3BlcnR5TmFtZSA9PiBtZXRhZGF0YVByb3BlcnRpZXNbcHJvcGVydHlOYW1lXS50eXBlID09PSBcImZcIik7XG5cbiAgICAgICAgcmV0dXJuIGZpbGVQcm9wZXJ0eU5hbWUgPyB7IHByb3BlcnR5TmFtZTogZmlsZVByb3BlcnR5TmFtZSwgZmlsZTogdGhpc1tmaWxlUHJvcGVydHlOYW1lXSB9IDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9SZXF1ZXN0T2JqZWN0KCk6IHt9IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIudG9SZXF1ZXN0T2JqZWN0KCk7XG4gICAgICAgIGNvbnN0IHsgcHJvcGVydHlOYW1lOiBmaWxlUHJvcGVydHlOYW1lIH0gPSB0aGlzLmdldEZpbGVJbmZvKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbZmlsZVByb3BlcnR5TmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iXX0=